import {
  TimelineItem,
  parseStringTimeToDateTime,
} from "@/entities/timelineItem/timelineItem";
import TimelineItemComponent from "./TimelineItem/TimelineItem";
import React, { useEffect, useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Timeline.module.scss";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  TimeInput,
  DatePicker,
} from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { WithClassName } from "@/types/style";
import { Textarea } from "@nextui-org/input";
import { scrollToBottom } from "@/utils/scroll";
import { motion } from "framer-motion";
import { APP_DEFAULT_INITIAL_TIME, getTodayDateString } from "@/utils/time";

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 1,
//     },
//   },
// };
//
// const itemVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       delay: 1,
//     },
//   },
// };

type Props = WithClassName & {};

export default function Timeline({ className }: Props) {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  useEffect(() => {
    getTimelineItems().then(setTimelineItems);
  }, []);

  function addItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget as HTMLFormElement;

    const titleInput = formElement.elements.namedItem(
      "title",
    ) as HTMLInputElement;
    const descriptionInput = formElement.elements.namedItem(
      "description",
    ) as HTMLInputElement;
    const timeInput = formElement.elements.namedItem(
      "time",
    ) as HTMLInputElement;
    const dateInput = formElement.elements.namedItem(
      "date",
    ) as HTMLInputElement;

    const newItem: TimelineItem = {
      title: titleInput.value,
      description: descriptionInput.value,
      time: parseStringTimeToDateTime(timeInput.value),
      date: new Date(dateInput.value),
    };

    setTimelineItems((prevItems) => [...prevItems, newItem]);

    scrollToBottom();
    onClose();
  }

  // ===============================================
  // JSX
  // ===============================================
  return (
    <div className={`${styles.timeline} ${className}`}>
      <div className={styles.timeline__header}>
        <h1>Timeline</h1>
      </div>

      <div className="relative">
        <motion.ul>
          {timelineItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: index * 0.03,
              }}
            >
              <TimelineItemComponent
                title={item.title}
                description={item.description}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <Button isIconOnly className={styles.addButton} onClick={onOpen}>
        <FontAwesomeIcon icon={faAdd} size={"lg"} />
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="m-4"
        placement="bottom"
        isDismissable={false}
        closeButton={false}
        shouldBlockScroll={false}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            <form
              onSubmit={addItem}
              className="flex flex-col gap-4"
              id="form-add-item"
            >
              <Input type="text" label="Title" name="title" isRequired />
              <DatePicker
                label={"Date"}
                name="date"
                isRequired
                defaultValue={parseDate(getTodayDateString())}
              />
              <TimeInput
                label="Time"
                defaultValue={APP_DEFAULT_INITIAL_TIME}
                name="time"
                isRequired
              />
              <Textarea label="Description" name="description" />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button type="submit" color="primary" form="form-add-item">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

async function getTimelineItems(): Promise<TimelineItem[]> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/timeline-items",
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();
  return data;
}
