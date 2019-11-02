import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Ninth extends React.Component {

    render() {
        return (
            <Container>
                <div className="add-margin-top-40px"></div>
                <Form>
                    <Header as="h3" className="dividing header">9. DISCLOSURE AND AGREEMENT REGARDING GEM$ APPLICATION</Header>

                    <p>By completing and submitting an Application, I certify that I have read, understand, and agree to all of the terms and conditions of the
                    GEM$ Program. By signing below, I certify that all information provided on this Application is true, correct and complete. If necessary, I
                    further agree to provide additional information to HGIA to review this Application. I hereby authorize HGIA to retain this Application
                whether or not it is approved.</p>
                    <p>I further agree, that HGIA may communicate and share with my landlord and/or property manager and the Contractor identified in Section
                    4 above, or subsequently identified by me to HGIA, and disclose orally and/or in writing, the following information regarding this
                    Application: energy usage history; whether this Application has been pre-approved by HGIA and any additional items requested by HGIA
                    in order to complete the processing of my request; whether this Application has been approved by HGIA so that my landlord and/or
                    property manager and Contractor(s) can proceed with scheduling the work; and whether this Application has been denied so that the
                landlord and/or property manager and Contractor(s) can determine if there are other financing available and whether I intend to proceed.</p>
                    <p>I understand and agree that HGIA does not guarantee the security of any data submitted electronically and will not be held responsible
                    or liable for interception by third parties. I understand and agree that in no event will HGIA be liable for any technical, hardware or software
                    failure of any kind, any interruption in the availability of this service, any delay in operation or transmission, any incomplete transmission,
                computer virus, loss of data, or other similar loss.</p>
                    <p>As an agency of the State of Hawaii, HGIA is subject to section 92F-12(a)(8) of the Hawaii Revised Statutes, which requires agencies to
                      collect and make available upon request “the name, address and occupation of any person borrowing funds from a state or county loan
                  program and the amount, purpose, and current status of the loan.”</p>
                    <p>I also authorize and grant HGIA unrestricted permission to share the information provided on this Application and subsequent Program
                    information related to the on-bill obligation (OBO), which will be the amount financed by HGIA to install the approved Energy Improvement
                    until the OBO is paid in full, with HGIA’s Servicing Agent, HGIA’s Board of Directors, my electric utility, the Public Benefits Fund
                  Administrator (currently known as Hawaii Energy) and the State of Hawaii.</p>
                    <p>I understand I must meet all eligibility criteria and requirements, including at least an estimated 10% net utility bill savings for each Energy
                Improvement requested, utilize a GEMS Approved Contractor and obtain permission from my landlord in order to participate in GEM$.</p>
                    <p>The federal Equal Credit Opportunity Act (ECOA) prohibits creditors from discriminating against credit applicants on the basis of race,
                    color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because
                    all or part of the applicant's income derives from any public assistance program; or because the applicant has in good faith exercised any
                    right under the Consumer Credit Protection Act. The federal agency that administers compliance with this law concerning this creditor is
                    the Federal Trade Commission Consumer Response Center Washington, DC 20580 1‐877‐FTC‐HELP (1‐877‐382‐4357) TDD: 1‐866‐
                  653‐4261 <a href="https://www.ftc.gov" target="_blank" rel="noopener noreferrer">www.ftc.gov.</a></p>
                    <p>By signing this Application, I confirm that I have received HGIA’s Privacy Notice as part of this Application packet. I also agree that I may,
                    but am not required to, agree to and accept the terms of this Application by electronic means, and that my submission of this Application
      by electronic means shall be sufficient evidence of my agreement to do so by electronic means</p>
                    <Form.Group>
                        <Form.Input label="Applicant’s Signature" placeholder='To be Updated' width={12} className="application-signature" required>
                            <canvas id="sig-canvas" className="set-canvas-width">
                                Please use another browser in order to sign this form.
                             </canvas>
                        </Form.Input>
                        <Form id="require-margin">
                            <Form.Input label="Date" type="date" id="getDate"></Form.Input>
                            <br />
                            <Form.Group>
                                <Form.Input>
                                    <Button className="green" id="sig-submitBtn">Submit Signature</Button>
                                </Form.Input>
                                <Form.Input>
                                    <Button className="green" id="sig-clearBtn">Clear Signature</Button>
                                </Form.Input>
                            </Form.Group>
                        </Form>
                    </Form.Group>
                    <Button className="float-right">
                        <Link to="">Save & Next &gt;</Link>
                    </Button>
                    <Button className="float-right">
                        <Link to="">Save & Exit</Link>
                    </Button>
                    <Button className="float-right">
                        <Link to="/formeighth">&lt; Previous</Link>
                    </Button>
                </Form>
                <div className="add-margin-top-40px"></div>
                <div>{this.addScript()}</div>
            </Container>
        );
    }

    addScript() {
        (function () {
            window.requestAnimFrame = (function (callback) {
                return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimaitonFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();

            setTimeout(function () { // wait for 0.25 sec to load up
                var canvas = document.getElementById("sig-canvas");
                var ctx = canvas.getContext("2d");

                ctx.strokeStyle = "#222222";
                ctx.lineWidth = 50;


                // dynamically change the width & height of canvas based on the browser's size
                function resize() {
                    let applicationSignature = document.getElementsByClassName("application-signature")[0];
                    let setCanvasWidth = document.getElementsByClassName("set-canvas-width")[0];
                    setCanvasWidth.height = applicationSignature.offsetHeight;
                    setCanvasWidth.width = applicationSignature.offsetWidth - 16;
                }
                resize();

                window.onresize = function (event) {
                    resize();
                };

                // dynamically change the date to today
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                let yyyy = today.getFullYear();
                console.log(`${mm}-${dd}-${yyyy}`);
                document.getElementById('getDate').value = `${yyyy}-${mm}-${dd}`;
                document.getElementById('getDate').disabled = true;


                var drawing = false;
                var mousePos = {
                    x: 0,
                    y: 0
                };
                var lastPos = mousePos;

                canvas.addEventListener("mousedown", function (e) {
                    drawing = true;
                    lastPos = getMousePos(canvas, e);
                }, false);

                canvas.addEventListener("mouseup", function (e) {
                    drawing = false;
                }, false);

                canvas.addEventListener("mousemove", function (e) {
                    mousePos = getMousePos(canvas, e);
                }, false);

                // Add touch event support for mobile
                canvas.addEventListener("touchstart", function (e) {

                }, false);

                canvas.addEventListener("touchmove", function (e) {
                    var touch = e.touches[0];
                    var me = new MouseEvent("mousemove", {
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    });
                    canvas.dispatchEvent(me);
                }, false);

                canvas.addEventListener("touchstart", function (e) {
                    mousePos = getTouchPos(canvas, e);
                    var touch = e.touches[0];
                    var me = new MouseEvent("mousedown", {
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    });
                    canvas.dispatchEvent(me);
                }, false);

                canvas.addEventListener("touchend", function (e) {
                    var me = new MouseEvent("mouseup", {});
                    canvas.dispatchEvent(me);
                }, false);

                function getMousePos(canvasDom, mouseEvent) {
                    var rect = canvasDom.getBoundingClientRect();
                    return {
                        x: mouseEvent.clientX - rect.left,
                        y: mouseEvent.clientY - rect.top
                    }
                }

                function getTouchPos(canvasDom, touchEvent) {
                    var rect = canvasDom.getBoundingClientRect();
                    return {
                        x: touchEvent.touches[0].clientX - rect.left,
                        y: touchEvent.touches[0].clientY - rect.top
                    }
                }

                function renderCanvas() {
                    if (drawing) {
                        ctx.moveTo(lastPos.x, lastPos.y);
                        ctx.lineTo(mousePos.x, mousePos.y);
                        ctx.stroke();
                        lastPos = mousePos;
                    }
                }

                // Prevent scrolling when touching the canvas
                document.body.addEventListener("touchstart", function (e) {
                    if (e.target == canvas) {
                        e.preventDefault();
                    }
                }, false);
                document.body.addEventListener("touchend", function (e) {
                    if (e.target == canvas) {
                        e.preventDefault();
                    }
                }, false);
                document.body.addEventListener("touchmove", function (e) {
                    if (e.target == canvas) {
                        e.preventDefault();
                    }
                }, false);

                (function drawLoop() {
                    requestAnimFrame(drawLoop);
                    renderCanvas();
                })();

                function clearCanvas() {
                    canvas.width = canvas.width;
                }

                // Set up the UI
                // var sigText = document.getElementById("sig-dataUrl");
                var sigImage = document.getElementById("sig-image");
                var clearBtn = document.getElementById("sig-clearBtn");
                var submitBtn = document.getElementById("sig-submitBtn");
                clearBtn.addEventListener('click', function (e) {
                    clearCanvas();
                    // sigText.innerHTML = "Data URL for your signature will go here!";
                    sigImage.setAttribute('src', "");
                }, false);
                submitBtn.addEventListener('click', function (e) {
                    var dataUrl = canvas.toDataURL();
                    // sigText.value = dataUrl;
                    sigImage.setAttribute('src', dataUrl);
                }, false);
            }, 250);

        })();
    }
}

export default Ninth;
