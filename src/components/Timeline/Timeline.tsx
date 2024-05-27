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
  DateInput,
  TimeInput,
  DatePicker,
} from "@nextui-org/react";
import {
  parseDate,
  parseTime,
  Time,
  now,
  getLocalTimeZone,
} from "@internationalized/date";
import { WithClassName } from "@/types/style";

/**
 * get ISO 8601 formatted date string for today
 *
 * @returns {string} ISO 8601 formatted date string for today
 */
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * get current time in HH:MM format
 *
 * @returns {string} current time in HH:MM format
 */
const getCurrentTime = () => {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

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

    const titleInput = formElement.querySelector(
      "#form-title",
    ) as HTMLInputElement;
    const descriptionInput = formElement.querySelector(
      "#form-description",
    ) as HTMLInputElement;
    const timeInput = formElement.querySelector(
      "#form-time input",
    ) as HTMLInputElement;
    const dateInput = formElement.querySelector(
      "#form-date input",
    ) as HTMLInputElement;

    const newItem: TimelineItem = {
      title: titleInput.value,
      description: descriptionInput.value,
      time: parseStringTimeToDateTime(timeInput.value),
      date: new Date(dateInput.value),
    };

    setTimelineItems((prevItems) => [...prevItems, newItem]);
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
        <ul>
          {timelineItems.map((item, index) => (
            <li key={index}>
              <TimelineItemComponent
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>

      <Button isIconOnly className={styles.addButton} onClick={onOpen}>
        <FontAwesomeIcon icon={faAdd} size={"lg"} />
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className="m-4"
        placement="center"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            <form
              onSubmit={addItem}
              className="flex flex-col gap-4"
              id="form-add-item"
            >
              <Input type="text" label="Title" id="form-title" isRequired />
              <Input
                type="text"
                label="Description"
                id="form-description"
                isRequired
              />
              <DatePicker
                label={"Date"}
                id="form-date"
                isRequired
                defaultValue={parseDate(getTodayDate())}
              />
              <TimeInput
                label="Time"
                defaultValue={new Time(8, 0)}
                id="form-time"
                isRequired
              />
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
