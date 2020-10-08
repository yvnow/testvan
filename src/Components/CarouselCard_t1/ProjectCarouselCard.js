import React from "react";
import "./ProjectCarouselCard.css";

import Avatar from "@material-ui/core/Avatar";

export default function ProjectCarouselCard() {
  return (
    <React.Fragment>
      <div className=" PCC_WholeDiv container">
        <div className="PCC_Header row">
          <div className="PCC_LogoDiv col">
            <Avatar style={{ color: "yellow", background: "black" }}>
              {"YV"}
            </Avatar>
          </div>
          <div className="PCC_TitleDiv col">
            <div className="PCC_TitleText row">TitleTitleTitleTitleTitle</div>
            <div className="PCC_BrandText row">Brand Brand</div>
          </div>
          <div className="PCC_BookMarkDiv col">
            <img
              className="bookmarked_icon"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5hn8CxFoxlp_iOta_LPlLnuRisMJ-FMoJkw&usqp=CAU"
              }
              alt="Yes"
            />
          </div>
        </div>
        <div className="PCC_BodyDiv row">
          <div className="col">
            <div className="PCC_LocationDiv row">
              <div className="col">LocationLocationLocationLocation</div>
            </div>
            <div className="PCC_ExpertisesDiv row">
              <div className="col">Expertise,Expertise,Expertise</div>
            </div>
            <div className="PCC_Details row">
                <div className="col">
                  <div className="PCC_DataLabel">Type</div>
                  <div className="PCC_DataActual">
                    TypeQwerty
                  </div>
                </div>
                <div className="col">
                  <div className="PCC_DataLabel">
                    Start Date
                  </div>
                  <div className="PCC_DataActual">
                    23/07/2021
                  </div>
                </div>
                <div className="col">
                  <div className="PCC_DataLabel">
                    Budget
                  </div>
                  <div className="PCC_DataActual">
                    $3000
                  </div>
                </div>
                <div className="col">
                  <div className="PCC_DataLabel">
                    End Date
                  </div>
                  <div className="PCC_DataActual">
                      27/01/2079
                  </div>
                </div>
                <br/>
                <div className="col PCC_Button">
                    <button className="btn btn-primary">View Project</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
