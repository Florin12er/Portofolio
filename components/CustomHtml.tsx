import React, { useState } from "react";
import { Alert } from "@/components/ui/alert";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Info,
  LightbulbIcon,
} from "lucide-react";

// Interfaces
interface ChildrenProps {
  children: React.ReactNode;
}

interface CollapsibleProps extends ChildrenProps {
  summary: string;
}

interface AccordionProps extends ChildrenProps {
  title: string;
}

interface WrapperProps extends ChildrenProps {
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
  title: string;
}

interface AlertWrapperProps extends WrapperProps {
  borderColor: string;
}

// Components
export const Collapsible: React.FC<CollapsibleProps> = ({
  summary,
  children,
}) => (
  <details className="border rounded-md p-2 my-4">
    <summary className="font-bold cursor-pointer">{summary}</summary>
    <div className="mt-2">{children}</div>
  </details>
);

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md mb-4">
      <button
        className="w-full p-4 text-left font-semibold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="p-4 border-t">{children}</div>}
    </div>
  );
};

const CalloutWrapper: React.FC<WrapperProps> = ({
  children,
  bgColor,
  textColor,
  icon,
  title,
}) => (
  <div className={`${bgColor} ${textColor} my-2 rounded-lg flex items-start`}>
    <div className="mr-6 mt-6 ml-4">{icon}</div>
    <div>
      <p className="font-bold text-lg mb-2">{title}</p>
      <div className="pb-4">{children}</div>
    </div>
  </div>
);

const AlertWrapper: React.FC<AlertWrapperProps> = ({
  children,
  bgColor,
  borderColor,
  textColor,
  icon,
  title,
}) => (
  <Alert
    className={`flex items-start ${bgColor} ${textColor} ${borderColor} my-4 p-4 rounded-lg`}
  >
    <div className="mr-3 mt-1">{icon}</div>
    <div>
      <h5 className="font-medium text-lg mb-2">{title}</h5>
      <div className="text-sm">{children}</div>
    </div>
  </Alert>
);

// Callouts
export const WarningCallout: React.FC<ChildrenProps> = ({ children }) => (
  <CalloutWrapper
    bgColor="bg-orange-100 dark:bg-orange-900"
    textColor="text-orange-700 dark:text-orange-100"
    icon={<AlertTriangle className="w-5 h-5" />}
    title="Warning"
  >
    {children}
  </CalloutWrapper>
);

export const SuccessCallout: React.FC<ChildrenProps> = ({ children }) => (
  <CalloutWrapper
    bgColor="bg-green-100 dark:bg-green-900"
    textColor="text-green-700 dark:text-green-100"
    icon={<CheckCircle className="w-5 h-5" />}
    title="Success"
  >
    {children}
  </CalloutWrapper>
);

export const InfoCallout: React.FC<ChildrenProps> = ({ children }) => (
  <CalloutWrapper
    bgColor="bg-blue-100 dark:bg-blue-900"
    textColor="text-blue-700 dark:text-blue-100"
    icon={<Info className="w-5 h-5" />}
    title="Info"
  >
    {children}
  </CalloutWrapper>
);

export const ErrorCallout: React.FC<ChildrenProps> = ({ children }) => (
  <CalloutWrapper
    bgColor="bg-red-100 dark:bg-red-900"
    textColor="text-red-700 dark:text-red-100"
    icon={<AlertCircle className="w-5 h-5" />}
    title="Error"
  >
    {children}
  </CalloutWrapper>
);

// Alerts
export const TipAlert: React.FC<ChildrenProps> = ({ children }) => (
  <AlertWrapper
    bgColor="bg-blue-50 dark:bg-blue-900/50"
    borderColor="border border-blue-200 dark:border-blue-800"
    textColor="text-blue-800 dark:text-blue-100"
    icon={
      <LightbulbIcon className="w-5 h-5 text-blue-500 dark:text-blue-300" />
    }
    title="Tip"
  >
    {children}
  </AlertWrapper>
);

export const ErrorAlert: React.FC<ChildrenProps> = ({ children }) => (
  <AlertWrapper
    bgColor="bg-red-50 dark:bg-red-900/50"
    borderColor="border border-red-200 dark:border-red-800"
    textColor="text-red-800 dark:text-red-100"
    icon={<AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-300" />}
    title="Error"
  >
    {children}
  </AlertWrapper>
);

export const NoteAlert: React.FC<ChildrenProps> = ({ children }) => (
  <AlertWrapper
    bgColor="bg-yellow-50 dark:bg-yellow-900/50"
    borderColor="border border-yellow-200 dark:border-yellow-800"
    textColor="text-yellow-800 dark:text-yellow-100"
    icon={
      <AlertCircle className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />
    }
    title="Note"
  >
    {children}
  </AlertWrapper>
);
