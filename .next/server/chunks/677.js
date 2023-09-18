"use strict";
exports.id = 677;
exports.ids = [677];
exports.modules = {

/***/ 6677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Subscribe() {
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleSubscribe = ()=>{
        setLoading(true);
        // Step 3: Handle form submission
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email === "" || !regex.test(String(email).toLowerCase())) {
            setMessage("Please enter a valid email");
            return;
        }
        const formData = new FormData();
        formData.append("api_key", "AghazFUFk4uDrDUsquEg");
        formData.append("email", email);
        formData.append("list", "ThA5aF2Lf06cHT892osZxndQ");
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("https://sendy.asvalabs.com/subscribe", formData, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }).then((response)=>{
            const resData = response.data;
            if (resData.includes(`You're already subscribed!`)) {
                setMessage(`You're already subscribed!`);
            }
            if (resData.includes(`You're subscribed!`)) {
                setMessage(`You're subscribed!`);
            }
            setEmail("");
            setLoading(false);
        }).catch((error)=>{
            setLoading(false);
            setMessage("Something went wrong!");
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        bg: "#fff",
        pb: {
            base: "0px",
            md: "100px"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            maxW: 1300,
            py: "125px",
            px: "25px",
            bg: " #F8F8F8",
            rounded: "15px",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                mx: "auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    direction: "column",
                    alignItems: "center",
                    textAlign: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            as: "h1",
                            size: "xl",
                            mb: "24px",
                            fontWeight: 500,
                            fontSize: "48px",
                            color: "#4C545A",
                            fontFamily: "PowerGrotesk",
                            children: "The Ventures & The Builders"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            mb: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                width: [
                                    "100%",
                                    "100%",
                                    "1000px"
                                ],
                                height: "auto",
                                fontWeight: 400,
                                fontSize: [
                                    "16px",
                                    "20px"
                                ],
                                color: "#888888",
                                children: "Your comprehensive frequent digest for all things Web3! Stay informed on impactful fundraising efforts, major industry events, thought-provoking articles, and a lot more."
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            gap: 0,
                            mt: "50px",
                            border: "1px solid #7A7A7A",
                            rounded: 5,
                            overflow: "hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    placeholder: "Enter your email",
                                    rounded: 0,
                                    fontSize: 18,
                                    color: "#888",
                                    outline: "none",
                                    border: "none",
                                    focusBorderColor: "transparent",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    background: "linear-gradient(135deg, #80FE7E 0%, #62FEA5 51.56%, #52FFBC 100%);",
                                    px: "34px",
                                    py: "20px",
                                    rounded: 0,
                                    _hover: {
                                        bg: "#80ff7d"
                                    },
                                    color: "#1F1F1F",
                                    fontFamily: "PowerGrotesk",
                                    fontWeight: 400,
                                    onClick: handleSubscribe,
                                    children: loading ? "Submitting..." : "Subscribe Now"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            color: "#1F1F1F",
                            textAlign: "center",
                            children: message
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subscribe);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;