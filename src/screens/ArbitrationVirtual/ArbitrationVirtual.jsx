import React from "react";
import { Base } from "../../components/Base";
import { IconChevronDown } from "../../components/IconChevronDown";
import { PropertyDefault } from "../../components/PropertyDefault";
import { Calendar } from "../../icons/Calendar";
import { IconChevronDown4 } from "../../icons/IconChevronDown4";
import { IconInside14 } from "../../icons/IconInside14";
import { MarkQuestion } from "../../icons/MarkQuestion";
import { MoreHorizontal } from "../../icons/MoreHorizontal";
import { Plus } from "../../icons/Plus";
import { Upload } from "../../icons/Upload";
import { X } from "../../icons/X";
import "./style.css";

export const ArbitrationVirtual = () => {
  return (
    <div className="arbitration-virtual">
      <div className="div-2">
        <div className="overlap">
          <div className="input">
            <div className="base-2">
              <p className="text-wrapper">
                Please list any additional requests or considerations you might have at this time
              </p>
              <div className="frame-2" />
            </div>
          </div>
          <div className="frame-3">
            <input className="input-text-2" placeholder="Input" type="text" />
            <PropertyDefault className="design-component-instance-node" />
          </div>
        </div>
        <p className="p">Will you need a quote prior to confirmation?</p>
        <p className="text-wrapper-2">Do you require CART services?</p>
        <div className="text-wrapper-3">Do you require interpretation?</div>
        <div className="group">
          <IconChevronDown4 className="icon-chevron-down" />
          <div className="text-wrapper-4">Additional Features</div>
        </div>
        <p className="text-wrapper-5">Will this matter plan to have a Court Reporter?</p>
        <div className="text-wrapper-6">Booking Party Information</div>
        <div className="text-wrapper-7">Use information on account?</div>
        <Base
          className="base-instance"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconChevronDown />}
          inputTextClassName="base-5"
          text="Booking Contact Name"
          text1="Type here"
          visible={false}
        />
        <Base
          className="base-6"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconChevronDown />}
          inputTextClassName="base-5"
          text="Phone Number (No Spaces)"
          text1="Type here"
          visible={false}
        />
        <Base
          className="base-8"
          emailClassName="base-9"
          formFieldClassName="base-4"
          frameClassName="base-7"
          icon={<IconChevronDown />}
          inputTextClassName="base-5"
          text="Billing Address"
          text1="Type here"
          visible={false}
        />
        <Base
          className="base-10"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconInside14 className="icon-inside-30" />}
          inputTextClassName="base-5"
          text="Firm Name"
          text1="Input"
          visible={false}
        />
        <Base
          className="base-12"
          emailClassName="base-3"
          formFieldClassName="base-13"
          frameClassNameOverride="base-11"
          inputTextClassName="base-14"
          text="Country/City"
          text1="Canada"
          visible={false}
          visible1={false}
          visible2={false}
        />
        <Base
          className="base-15"
          emailClassName="base-3"
          formFieldClassName="base-13"
          frameClassNameOverride="design-component-instance-node"
          inputTextClassName="base-5"
          text="ZIP/Postal Code"
          text1="Input"
          visible={false}
          visible2={false}
        />
        <p className="text-wrapper-8">(Enter as much as possible)</p>
        <IconChevronDown4 className="icon-chevron-down-4" />
        <div className="group-2">
          <div className="text-wrapper-9">Opposing Party Information</div>
          <IconChevronDown4 className="icon-chevron-down-3" />
        </div>
        <Base
          className="base-16"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconChevronDown />}
          inputTextClassName="base-5"
          text="Booking Contact Name"
          text1="Type here"
          visible={false}
        />
        <Base
          className="base-17"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconChevronDown />}
          inputTextClassName="base-5"
          text="Phone Number (No Spaces)"
          text1="Type here"
          visible={false}
        />
        <Base
          className="base-18"
          emailClassName="base-9"
          formFieldClassName="base-4"
          frameClassName="base-7"
          icon={<IconChevronDown />}
          inputTextClassName="base-5"
          text="Billing Address"
          text1="Type here"
          visible={false}
        />
        <Base
          className="base-19"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconInside14 className="icon-inside-30" />}
          inputTextClassName="base-5"
          text="Firm Name"
          text1="Input"
          visible={false}
        />
        <Base
          className="base-20"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconInside14 className="icon-inside-30" />}
          inputTextClassName="base-5"
          text="Role"
          text1="Input"
          visible={false}
        />
        <Base
          className="base-21"
          emailClassName="base-3"
          formFieldClassName="base-13"
          frameClassNameOverride="base-11"
          inputTextClassName="base-14"
          text="Country/City"
          text1="Canada"
          visible={false}
          visible1={false}
          visible2={false}
        />
        <Base
          className="base-22"
          emailClassName="base-3"
          formFieldClassName="base-13"
          frameClassNameOverride="design-component-instance-node"
          inputTextClassName="base-5"
          text="ZIP/Postal Code"
          text1="Input"
          visible={false}
          visible2={false}
        />
        <div className="overlap-group">
          <div className="base-wrapper">
            <div className="base-23">
              <div className="text-wrapper">Lead counsel(s) Information</div>
              <div className="frame-2" />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="div-wrapper">
              <div className="base-23">
                <div className="text-wrapper">{""}</div>
                <div className="frame-2" />
              </div>
            </div>
          </div>
          <div className="text-wrapper-10">Name</div>
          <PropertyDefault className="property-1-default" />
          <div className="text-wrapper-11">Add additional counsel</div>
        </div>
        <div className="overlap-2">
          <div className="input-2">
            <div className="base-23">
              <div className="text-wrapper">{""}</div>
              <div className="frame-2" />
            </div>
          </div>
          <div className="base-wrapper">
            <div className="base-23">
              <div className="text-wrapper">{""}</div>
              <div className="frame-2" />
            </div>
          </div>
          <div className="text-wrapper-12">Email</div>
          <PropertyDefault className="property-default-instance" />
        </div>
        <MoreHorizontal className="more-horizontal" />
        <MoreHorizontal className="more-horizontal-instance" />
        <Plus className="plus-instance" />
        <img className="image" alt="Image" src="/img/image-16.png" />
        <div className="input-3">
          <div className="base-23">
            <input className="email-2" placeholder="Name of Represented Client" type="text" />
            <div className="frame-2" />
          </div>
        </div>
        <Base
          className="base-24"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconChevronDown />}
          inputTextClassName="base-5"
          text="Booking Contact Name"
          text1="Type here"
          visible={false}
        />
        <Base
          className="base-25"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconChevronDown />}
          inputTextClassName="base-5"
          text="Phone Number (No Spaces)"
          text1="Type here"
          visible={false}
        />
        <Base
          className="base-26"
          emailClassName="base-9"
          formFieldClassName="base-4"
          frameClassName="base-7"
          icon={<IconChevronDown />}
          inputTextClassName="base-5"
          text="Billing Address"
          text1="Type here"
          visible={false}
        />
        <Base
          className="base-27"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconInside14 className="icon-inside-30" />}
          inputTextClassName="base-5"
          text="Firm Name"
          text1="Input"
          visible={false}
        />
        <Base
          className="base-28"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconInside14 className="icon-inside-30" />}
          inputTextClassName="base-5"
          text="Role"
          text1="Input"
          visible={false}
        />
        <Base
          className="base-29"
          emailClassName="base-3"
          formFieldClassName="base-13"
          frameClassNameOverride="base-11"
          inputTextClassName="base-14"
          text="Country/City"
          text1="Canada"
          visible={false}
          visible1={false}
          visible2={false}
        />
        <Base
          className="base-30"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconInside14 className="icon-inside-30" />}
          inputTextClassName="base-5"
          text="ZIP/Postal Code"
          text1="Input"
          visible={false}
        />
        <div className="overlap-3">
          <div className="base-wrapper">
            <div className="base-23">
              <div className="text-wrapper">Lead counsel(s) Information</div>
              <div className="frame-2" />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="div-wrapper">
              <div className="base-23">
                <div className="text-wrapper">{""}</div>
                <div className="frame-2" />
              </div>
            </div>
          </div>
          <div className="text-wrapper-10">Name</div>
          <PropertyDefault className="property-1-default" />
          <div className="text-wrapper-11">Add additional counsel</div>
        </div>
        <div className="overlap-4">
          <div className="input-2">
            <div className="base-23">
              <div className="text-wrapper">{""}</div>
              <div className="frame-2" />
            </div>
          </div>
          <div className="base-wrapper">
            <div className="base-23">
              <div className="text-wrapper">{""}</div>
              <div className="frame-2" />
            </div>
          </div>
          <div className="text-wrapper-12">Email</div>
          <PropertyDefault className="property-default-instance" />
        </div>
        <MoreHorizontal className="icon-instance-node" />
        <MoreHorizontal className="more-horizontal-2" />
        <Plus className="plus-2" />
        <div className="input-4">
          <div className="base-23">
            <input className="email-2" placeholder="Name of Represented Client" type="text" />
            <div className="frame-2" />
          </div>
        </div>
        <Plus className="plus-3" />
        <Base
          className="base-31"
          emailClassName="base-3"
          formFieldClassName="base-4"
          icon={<IconInside14 className="icon-inside-30" />}
          inputTextClassName="base-5"
          text="Role"
          text1="Input"
          visible={false}
        />
        <div className="overlap-5">
          <div className="base-wrapper">
            <div className="base-23">
              <div className="text-wrapper">Lead counsel(s) Information</div>
              <div className="frame-2" />
            </div>
          </div>
          <div className="text-wrapper-13">Name</div>
          <div className="group-3">
            <div className="div-wrapper">
              <div className="base-23">
                <div className="text-wrapper">{""}</div>
                <div className="frame-2" />
              </div>
            </div>
          </div>
          <div className="text-wrapper-14">Add additional counsel</div>
        </div>
        <div className="input-5">
          <div className="base-23">
            <div className="text-wrapper">{""}</div>
            <div className="frame-2" />
          </div>
        </div>
        <div className="overlap-6">
          <div className="base-wrapper">
            <div className="base-23">
              <div className="text-wrapper">{""}</div>
              <div className="frame-2" />
            </div>
          </div>
          <div className="text-wrapper-12">Email</div>
          <PropertyDefault className="property-default-instance" />
        </div>
        <MoreHorizontal className="more-horizontal-3" />
        <MoreHorizontal className="more-horizontal-4" />
        <div className="input-6">
          <div className="base-23">
            <input className="email-2" placeholder="Name of Represented Client" type="text" />
            <div className="frame-2" />
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="toggle">
              <div className="bg" />
            </div>
            <div className="text-wrapper-15">Yes</div>
          </div>
        </div>
        <div className="group-4">
          <IconChevronDown4 className="icon-chevron-down-1" />
          <div className="text-wrapper-9">Basic Logistics</div>
        </div>
        <div className="overlap-7">
          <Base
            className="base-32"
            emailClassName="base-3"
            formFieldClassName="base-4"
            icon={<IconChevronDown />}
            inputTextClassName="base-5"
            text="Style of cause"
            text1="Type here"
            visible={false}
          />
          <Base
            className="base-33"
            emailClassName="base-3"
            formFieldClassName="base-4"
            icon={<IconChevronDown />}
            inputTextClassName="base-5"
            text="Court File #"
            text1="Type here"
            visible={false}
          />
          <div className="overlap-8">
            <div className="group-5">
              <Base
                className="base-34"
                emailClassName="base-3"
                formFieldClassName="base-36"
                frameClassName="base-35"
                hasFrame={false}
                icon={<IconChevronDown />}
                text="Time Zone"
                visible={false}
              />
              <Base
                className="base-37"
                emailClassName="base-3"
                formFieldClassName="base-38"
                frameClassName="base-35"
                hasFrame={false}
                icon={<IconChevronDown />}
                text="Start time"
                visible={false}
              />
              <div className="frame-4">
                <div className="form-field-2">
                  <IconInside14 className="icon-inside-21" />
                </div>
              </div>
              <IconChevronDown />
            </div>
            <div className="group-6">
              <div className="base-39">
                <Base
                  className="base-39"
                  emailClassName="base-3"
                  formFieldClassName="base-40"
                  hasFrame={false}
                  icon={<IconChevronDown />}
                  text="Booking Dates"
                  visible={false}
                />
                <Calendar className="calendar-instance" />
                <img className="line" alt="Line" src="/img/line-6.svg" />
              </div>
              <IconChevronDown />
            </div>
            <div className="group-7">
              <div className="overlap-9">
                <div className="input-7">
                  <div className="base-41">
                    <div className="text-wrapper">Arbitrator(s)</div>
                    <div className="frame-2" />
                  </div>
                </div>
                <div className="text-wrapper-16">Chair’s name</div>
                <PropertyDefault className="property-1-default-instance" />
              </div>
              <div className="overlap-10">
                <div className="input-8">
                  <div className="base-42">
                    <div className="text-wrapper">{""}</div>
                    <div className="frame-2" />
                  </div>
                </div>
                <div className="text-wrapper-12">Email</div>
                <PropertyDefault className="cursor-2" />
                <div className="input-9">
                  <div className="base-43">
                    <div className="text-wrapper">{""}</div>
                    <div className="frame-2" />
                  </div>
                </div>
              </div>
              <MoreHorizontal className="more-horizontal-5" />
              <div className="overlap-11">
                <div className="group-8">
                  <div className="div-wrapper">
                    <div className="base-44">
                      <div className="text-wrapper">{""}</div>
                      <div className="frame-2" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-17">Add additional arbitrator</div>
              </div>
              <MoreHorizontal className="more-horizontal-6" />
              <Plus className="plus-4" />
            </div>
            <div className="text-wrapper-18">Tribunal secretary?</div>
            <MarkQuestion className="mark-question" />
            <div className="overlap-wrapper">
              <div className="overlap-group-2">
                <div className="toggle">
                  <div className="bg" />
                </div>
                <div className="text-wrapper-15">Yes</div>
              </div>
            </div>
            <div className="group-9">
              <div className="overlap-group-2">
                <div className="toggle">
                  <div className="bg" />
                </div>
                <div className="text-wrapper-15">Yes</div>
              </div>
            </div>
            <div className="group-10">
              <div className="overlap-group-2">
                <div className="toggle">
                  <div className="bg" />
                </div>
                <div className="text-wrapper-15">Yes</div>
              </div>
            </div>
            <div className="group-11">
              <div className="overlap-group-2">
                <div className="toggle">
                  <div className="bg" />
                </div>
                <div className="text-wrapper-15">Yes</div>
              </div>
            </div>
            <div className="group-12">
              <div className="overlap-9">
                <div className="input-7">
                  <div className="base-41">
                    <div className="text-wrapper">Witness(es)</div>
                    <div className="frame-2" />
                  </div>
                </div>
                <div className="text-wrapper-16">Witness’ name</div>
                <PropertyDefault className="cursor-3" />
              </div>
              <div className="overlap-10">
                <div className="input-8">
                  <div className="base-42">
                    <div className="text-wrapper">{""}</div>
                    <div className="frame-2" />
                  </div>
                </div>
                <div className="text-wrapper-12">Email</div>
                <PropertyDefault className="cursor-4" />
                <div className="input-9">
                  <div className="base-43">
                    <div className="text-wrapper">{""}</div>
                    <div className="frame-2" />
                  </div>
                </div>
              </div>
              <MoreHorizontal className="more-horizontal-5" />
              <div className="overlap-11">
                <div className="group-8">
                  <div className="div-wrapper">
                    <div className="base-44">
                      <div className="text-wrapper">{""}</div>
                      <div className="frame-2" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-17">Add additional witness</div>
              </div>
              <MoreHorizontal className="more-horizontal-6" />
              <Plus className="plus-4" />
            </div>
            <div className="group-13">
              <div className="div-wrapper">
                <div className="base-44">
                  <div className="text-wrapper">{""}</div>
                  <div className="frame-2" />
                </div>
              </div>
            </div>
            <div className="input-10">
              <div className="base-43">
                <div className="text-wrapper">{""}</div>
                <div className="frame-2" />
              </div>
            </div>
            <MoreHorizontal className="more-horizontal-7" />
            <div className="text-wrapper-19">Tribunal secretary’s name</div>
            <p className="text-wrapper-20">Do you require a VCM (virtual case manager)?</p>
            <p className="text-wrapper-21">Do you need us to provide Document Managing Services?</p>
            <p className="text-wrapper-22">Would you like the your matter to be recorded?</p>
            <MarkQuestion className="mark-question-15" />
            <Base
              className="base-45"
              emailClassName="base-3"
              formFieldClassName="base-47"
              frameClassName="base-46"
              icon={<IconInside14 className="icon-inside-15" />}
              inputTextClassName="base-5"
              text="Select a virtual platform"
              text1="Zoom"
              visible={false}
            />
            <div className="input-11">
              <div className="base-48">
                <p className="text-wrapper">Is there a particular VCM you want to work with?</p>
                <div className="frame-2" />
              </div>
            </div>
            <div className="input-12">
              <div className="base-49">
                <p className="text-wrapper">Number of virtual breakout rooms</p>
                <div className="frame-2" />
              </div>
            </div>
            <div className="group-14">
              <IconChevronDown4 className="icon-chevron-down-1" />
              <div className="text-wrapper-9">Virtual Logistics</div>
            </div>
            <div className="text-wrapper-23">VCM’s name</div>
            <div className="input-13">
              <div className="base-50">
                <p className="text-wrapper">
                  Do you have any&nbsp;&nbsp;special accommodations for your
                  <br />
                  booking that our I.T. team can look into prior to the
                  <br />
                  start date?
                </p>
                <div className="frame-2" />
              </div>
            </div>
            <IconInside14 className="icon-inside-2" />
            <div className="group-15">
              <div className="overlap-12">
                <div className="desktop">
                  <div className="text-wrapper-24">Party Information</div>
                  <div className="text-wrapper-25">Logistics</div>
                  <div className="text-wrapper-26">Additional Services</div>
                  <div className="text-wrapper-27">Initial Information</div>
                </div>
                <div className="frame-5">
                  <div className="overlap-group-3">
                    <div className="ellipse" />
                    <div className="ellipse-2" />
                    <div className="ellipse-3" />
                    <div className="ellipse-4" />
                    <img className="img" alt="Line" src="/img/line-7.svg" />
                    <img className="line-2" alt="Line" src="/img/line-8.svg" />
                    <img className="line-3" alt="Line" src="/img/line-9.svg" />
                    <div className="text-wrapper-28">1</div>
                    <div className="text-wrapper-29">2</div>
                    <div className="text-wrapper-30">3</div>
                    <div className="text-wrapper-31">4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-6">
              <input className="input-text-2" placeholder="Input" type="text" />
              <PropertyDefault className="design-component-instance-node" />
            </div>
            <IconInside14 className="icon-inside-14-instance" />
          </div>
          <MarkQuestion className="mark-question-instance" />
          <MarkQuestion className="mark-question-15-instance" />
          <MarkQuestion className="mark-question-2" />
          <MarkQuestion className="mark-question-3" />
          <MarkQuestion className="mark-question-4" />
          <MarkQuestion className="mark-question-5" />
        </div>
        <div className="overlap-13">
          <Base
            className="base-51"
            emailClassName="base-3"
            hasFormField={false}
            text="Upload Cover Page (optional)"
            visible={false}
          />
          <div className="text-wrapper-32">Choose file here</div>
          <Upload className="upload-instance" />
        </div>
        <div className="group-16">
          <IconChevronDown4 className="icon-chevron-down" />
          <div className="text-wrapper-4">Court Reporting</div>
        </div>
        <div className="group-17">
          <div className="overlap-group-2">
            <div className="toggle">
              <div className="bg" />
            </div>
            <div className="text-wrapper-15">Yes</div>
          </div>
        </div>
        <p className="text-wrapper-33">Would you like an Arbitration Place Court Reporter?</p>
        <div className="group-18">
          <div className="overlap-group-2">
            <div className="toggle">
              <div className="bg" />
            </div>
            <div className="text-wrapper-15">Yes</div>
          </div>
        </div>
        <div className="overlap-14">
          <div className="base-wrapper">
            <div className="base-52">
              <p className="text-wrapper">
                Is there a specific Arbitration Place Court Reporter <br />
                you prefer?
              </p>
              <div className="frame-2" />
            </div>
          </div>
          <div className="text-wrapper-34">Select AP Court Reporter</div>
        </div>
        <p className="text-wrapper-35">Will a transcript be required?</p>
        <div className="group-19">
          <div className="overlap-group-2">
            <div className="toggle">
              <div className="bg" />
            </div>
            <div className="text-wrapper-15">Yes</div>
          </div>
        </div>
        <div className="group-20">
          <div className="overlap-group-2">
            <div className="toggle">
              <div className="bg" />
            </div>
            <div className="text-wrapper-15">Yes</div>
          </div>
        </div>
        <div className="group-21">
          <div className="overlap-group-2">
            <div className="toggle">
              <div className="bg" />
            </div>
            <div className="text-wrapper-15">Yes</div>
          </div>
        </div>
        <div className="group-22">
          <div className="overlap-group-2">
            <div className="toggle">
              <div className="bg" />
            </div>
            <div className="text-wrapper-15">Yes</div>
          </div>
        </div>
        <div className="group-23">
          <div className="overlap-group-2">
            <div className="toggle">
              <div className="bg" />
            </div>
            <div className="text-wrapper-15">Yes</div>
          </div>
        </div>
        <Base
          className="base-53"
          emailClassName="base-3"
          formFieldClassName="base-4"
          frameClassNameOverride="base-54"
          icon={<IconInside14 className="icon-inside-30" />}
          inputTextClassName="base-14"
          text="Turnaround time?"
          text1="Standard"
          visible={false}
          visible1={false}
        />
        <MarkQuestion className="mark-question-6" />
        <MarkQuestion className="mark-question-7" />
        <div className="text-wrapper-36">Multilingual?</div>
        <MarkQuestion className="mark-question-8" />
        <MarkQuestion className="mark-question-9" />
        <MarkQuestion className="mark-question-10" />
        <MarkQuestion className="mark-question-11" />
        <MarkQuestion className="mark-question-12" />
        <div className="overlap-15">
          <div className="base-wrapper">
            <div className="base-52">
              <p className="text-wrapper">
                Please list the non-english languages you would
                <br />
                like accommodated (separate by comma)
              </p>
              <div className="frame-2" />
            </div>
          </div>
          <div className="frame-7">
            <input className="input-text-2" placeholder="Input" type="text" />
            <PropertyDefault className="design-component-instance-node" />
          </div>
        </div>
        <Base
          className="base-55"
          emailClassName="base-3"
          formFieldClassName="base-4"
          frameClassNameOverride="base-54"
          icon={<IconInside14 className="icon-inside-30" />}
          inputTextClassName="base-14"
          text="Daily Rough Draft?"
          text1="I don’t know"
          visible={false}
          visible1={false}
        />
        <div className="overlap-16">
          <Base
            className="base-51"
            emailClassName="base-3"
            formFieldClassName="base-4"
            hasFrame={false}
            icon={<IconInside14 className="icon-inside-30" />}
            text="Realtime reporting?"
            visible={false}
          />
          <div className="frame-8">
            <div className="input-text-3">I don’t know</div>
          </div>
        </div>
        <div className="overlap-17">
          <div className="base-wrapper">
            <div className="base-52">
              <p className="text-wrapper">
                Please list all languages to be interpreted <br />
                (separate by comma)
              </p>
              <div className="frame-2" />
            </div>
          </div>
          <div className="frame-9">
            <input className="input-text-2" placeholder="Input" type="text" />
            <PropertyDefault className="design-component-instance-node" />
          </div>
        </div>
        <div className="group-24">
          <div className="overlap-18">
            <div className="desktop-2">
              <div className="text-wrapper-37">Party Information</div>
              <div className="text-wrapper-25">Logistics</div>
              <div className="text-wrapper-38">Additional Services</div>
              <div className="text-wrapper-27">Initial Information</div>
            </div>
            <div className="frame-10">
              <div className="overlap-group-3">
                <div className="ellipse" />
                <div className="ellipse-5" />
                <div className="ellipse-3" />
                <div className="ellipse-6" />
                <img className="img" alt="Line" src="/img/line-7-2.svg" />
                <img className="line-2" alt="Line" src="/img/line-8-2.svg" />
                <img className="line-3" alt="Line" src="/img/line-9-2.svg" />
                <div className="text-wrapper-28">1</div>
                <div className="text-wrapper-39">2</div>
                <div className="text-wrapper-30">3</div>
                <div className="text-wrapper-40">4</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-25">
          <div className="overlap-19">
            <X className="x-instance" />
            <div className="text-wrapper-41">ADDITIONAL PARTIES</div>
          </div>
        </div>
        <div className="group-26">
          <div className="overlap-12">
            <div className="desktop">
              <div className="text-wrapper-24">Party Information</div>
              <div className="text-wrapper-42">Logistics</div>
              <div className="text-wrapper-38">Additional Services</div>
              <div className="text-wrapper-27">Initial Information</div>
            </div>
            <div className="frame-5">
              <div className="overlap-group-3">
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="ellipse-7" />
                <div className="ellipse-6" />
                <img className="img" alt="Line" src="/img/line-7.svg" />
                <img className="line-2" alt="Line" src="/img/line-8-1.svg" />
                <img className="line-3" alt="Line" src="/img/line-9.svg" />
                <div className="text-wrapper-28">1</div>
                <div className="text-wrapper-29">2</div>
                <div className="text-wrapper-43">3</div>
                <div className="text-wrapper-40">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
