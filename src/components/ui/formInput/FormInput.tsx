import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    name: string;
    value?: string;
    type?: "text" | "textarea" | "number"; // Limit to text, textarea, and number
    handleInputChange: (name: string, value: string) => void;
  };

function FormInput({
  label,
  type = "text", // Default to text input
  name,
  value,
  handleInputChange,
  ...rest
}: FormInputProps) {
  const inputElement =
    type === "textarea" ? (
      <textarea
        name={name}
        className="bg-white border border-formBorderColor text-primary outline-none w-full p-2 rounded-md shadow-sm focus:ring-2 focus:ring-formBorderColor focus:border-formBorderColor resize-none"
        value={value}
        onChange={(e) => handleInputChange(name, e.target.value)}
        {...rest}
      />
    ) : (
      <input
        type={type}
        name={name}
        className={`bg-white border border-formBorderColor text-primary outline-none w-full p-2 rounded-md shadow-sm focus:ring-2 focus:ring-formBorderColor focus:border-formBorderColor ${
          type === "number" ? "no-arrows" : ""
        }`} // Apply the 'no-arrows' class for number input type
        value={value}
        onChange={(e) => handleInputChange(name, e.target.value)}
        {...rest}
      />
    );

  return (
    <div className="w-full mt-2">
      <label className="text-gray-700 text-[14px] mb-[4px] block">{label}</label>
      <div className="w-full">{inputElement}</div>
    </div>
  );
}

export default FormInput;
