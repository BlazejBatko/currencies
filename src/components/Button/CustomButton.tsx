import "./CustomButton.css";

type Props = {
  callback: () => void;
  content: any;
  customClassName: string;
};

const CustomButton = ({ callback, content, customClassName }: Props) => {
  return (
    <button
      onClick={() => {
        callback();
      }}
      className={customClassName}
    >
      {content}
    </button>
  );
};

export default CustomButton;
