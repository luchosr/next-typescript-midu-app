import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import FormHelperText from "@material-ui/core/FormHelperText";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import DoneAllIcon from "@material-ui/icons/DoneAll";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";

interface BodyProps {
  bodyStyle: any;
  bodyClassName: string;
  clickHandler: any;
  fieldToEdit: string;
  editionSuccess: boolean;
  editionHandler: any;
  deploymentPatterns: string;
}

export const SubmissionBody = ({
  bodyStyle,
  bodyClassName,
  clickHandler,
}: BodyProps) => {
  return (
    <div style={bodyStyle} className={bodyClassName}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Submitted!</h2>

        <span style={{ cursor: "pointer" }} onClick={clickHandler}>
          <CloseIcon />
        </span>
      </div>
      <p>
        You have submitted the mandatory pre-requisites for QA review. CARF team
        will contact you shortly to either:
      </p>
      <p>a) update one or more pre-requisite(s)</p>
      <p>b) schedule Tollgate Review</p>
    </div>
  );
};

export const conditionalBody = ({
  bodyStyle,
  bodyClassName,
  clickHandler,
  fieldToEdit,
  editionSuccess,
  deploymentPatterns,
  editionHandler,
}: BodyProps) => {
  return (
    <div>
      <div style={bodyStyle} className={bodyClassName}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {fieldToEdit === "Deployment Patterns" ? (
            <h3>
              Confirm if design implements all relevant Deployment Patterns
            </h3>
          ) : (
            <h2 id="simple-modal-title">
              {!editionSuccess && "Edit"} {fieldToEdit}
            </h2>
          )}

          <span style={{ cursor: "pointer" }} onClick={clickHandler}>
            <CloseIcon />
          </span>
        </div>

        <form style={{ marginLeft: "20px", marginTop: "30px" }}>
          {editionSuccess === false ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                justifyContent: "space-between",
                marginBottom: "25px",
                padding: "25px 15px 15px 15px",
                borderRadius: 10,
              }}
            >
              {fieldToEdit === "Deployment Patterns" ? (
                <>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Deployment Patterns
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="deployment-patterns"
                      value={deploymentPatterns}
                      // @ts-ignore
                      onChange={handleSelectChange}
                      label="Deployment Patterns"
                      inputProps={{
                        deploymentPatterns: deploymentPatterns,
                        id: "outlined-age-native-simple",
                      }}
                    >
                      <MenuItem value={"yes"}>
                        Yes - the design implements ALL relevant deployment
                        patterns
                      </MenuItem>
                      <MenuItem value={"no"}>
                        No - the design DOES NOT implement ALL of the deployment
                        patterns
                      </MenuItem>
                    </Select>
                    <FormHelperText>
                      If no, provide the rationale why in the comments section
                    </FormHelperText>

                    <h4>Solution Design (URL)</h4>
                    <Link>
                      https://confluence.intranet.db.com/display/GMRR/Evidence_Docs_sdd_exitplanV2
                    </Link>
                    <FormHelperText>
                      If you have not provided your Solution Design URL, this
                      will be null
                    </FormHelperText>
                  </FormControl>
                </>
              ) : (
                <TextField
                  id={fieldToEdit}
                  label={fieldToEdit}
                  defaultValue="www.urlGivenByUser.com"
                  autoComplete="off"
                  variant="outlined"
                  style={{ width: "70%" }}
                />
              )}
              {fieldToEdit === "Blueprint" ? null : (
                <TextareaAutosize
                  aria-label="empty textarea"
                  minRows={4}
                  placeholder="Comment"
                  style={{
                    borderColor: "lightgray",
                    borderRadius: 5,
                    height: "50px",
                  }}
                />
              )}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5em",
              }}
            >
              Saved
              <DoneAllIcon
                style={{ marginLeft: "10px", fontSize: "32px", color: "green" }}
              />
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 60,
            }}
          >
            {editionSuccess === false ? (
              <>
                <Button
                  variant="contained"
                  style={{ margin: "0 20px" }}
                  color="primary"
                  // disabled={!linkUrl}
                  onClick={editionHandler}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#FFFF", color: "black" }}
                  onClick={clickHandler}
                >
                  Cancel
                </Button>
              </>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
