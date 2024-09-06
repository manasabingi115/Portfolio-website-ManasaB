import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  Button,
} from "@fluentui/react-components";

import { Dismiss24Regular } from "@fluentui/react-icons";

const ProjectDetailsPopUp = ({ popUp, setPopUp, selectedData }) => {
  console.log(selectedData);
  return (
    <Dialog className="dialog_box" open={popUp}>
      <DialogSurface className="dialog_surface">
        <DialogBody>
          <DialogTitle
            action={
              <DialogTrigger action="close">
                <Button
                  appearance="subtle"
                  aria-label="close"
                  icon={<Dismiss24Regular />}
                  onClick={() => setPopUp(false)}
                />
              </DialogTrigger>
            }
          >
            <h3>{selectedData.projectName}</h3>
          </DialogTitle>
          <DialogContent>
            <p>{selectedData.description}</p>
            <p>
              <strong>Skills Used: </strong>
              <div className="dialog_skills_container">
                {selectedData?.technologiesUsed?.map((skill, index) => (
                  <span className="dialog_skills" key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </p>
            <p>
              <strong>Live At: </strong>
              <a href={selectedData.liveAt}>{selectedData.liveAt} </a>
            </p>
            <p>
              <strong>Github Repo: </strong>
              <a href={selectedData.githubRepo}>{selectedData.githubRepo}</a>
            </p>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default ProjectDetailsPopUp;
