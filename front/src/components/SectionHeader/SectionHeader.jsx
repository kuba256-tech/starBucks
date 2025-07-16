const SectionHeader = ({ text, gradientText }) => {
  return (
    <div className="SectionHeader">
      <h3>
        {text} <br />
        <span>{gradientText}</span>
      </h3>
    </div>
  );
};

export default SectionHeader;
