import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useLessonStore } from "../store/lessonStore";
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { lessonData } from "../lessons/lessonsData";
import { Fragment } from "react";

interface LessonsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LessonsDialog({ isOpen, onClose }: LessonsDialogProps) {
  const completedTasks = useLessonStore((state) => state.completedTasks);
  const currentModule = useLessonStore((state) => state.currentModule);

  const isCurrentModule = currentModule === 1;
  const allTasksCompleted = lessonData.lessons.every((lesson) =>
    lesson.tasks.every((task) => completedTasks.has(task.id)),
  );

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as="div"
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as="div"
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="mx-auto max-w-3xl rounded-lg bg-[#1e1e1e] p-6 w-full max-h-[80vh] overflow-y-auto">
              <DialogTitle className="text-xl font-semibold text-gray-200 mb-4">
                Git Learning Path
              </DialogTitle>
              <div className="space-y-4">
                {lessonData.lessons.map((lesson, index) => (
                  <Disclosure key={index}>
                    {({ open }) => (
                      <div className="border border-[#333333] rounded-lg overflow-hidden">
                        <DisclosureButton
                          className={`w-full p-4 flex items-center justify-between ${
                            isCurrentModule ? "bg-blue-600/20" : ""
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-200 font-medium">
                              {lesson.tasks[0].title}
                            </span>
                            {allTasksCompleted && (
                              <CheckCircleIcon className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-400 text-sm">
                              {
                                lesson.tasks.filter((task) =>
                                  completedTasks.has(task.id),
                                ).length
                              }
                              /{lesson.tasks.length}
                            </span>
                            <ChevronDownIcon
                              className={`w-5 h-5 text-gray-400 transition-transform ${
                                open ? "transform rotate-180" : ""
                              }`}
                            />
                          </div>
                        </DisclosureButton>
                        <Transition
                          enter="transition duration-200 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-100 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <DisclosurePanel className="px-4 pb-4 pt-2">
                            <div className="space-y-2">
                              {lesson.tasks.map((task, taskIndex) => (
                                <div
                                  key={taskIndex}
                                  className="flex items-center justify-between text-sm transform transition-all duration-200 hover:translate-x-2"
                                >
                                  <span
                                    className={`${
                                      completedTasks.has(task.id)
                                        ? "text-gray-400"
                                        : "text-gray-300"
                                    }`}
                                  >
                                    {task.title}
                                  </span>
                                  {completedTasks.has(task.id) && (
                                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </DisclosurePanel>
                        </Transition>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
