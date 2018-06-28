import React from "react";
// import fileDownload from "js-file-download";

const DownloadEmployeeList = () => {
  return (
    <a href="/assets/male.jpg" download>
      Download
      {/* <Popup
        trigger={<Icon name="download" size="large" color="grey" />}
        content="Download Employee List"
      /> */}
    </a>
  );
};

export default DownloadEmployeeList;
