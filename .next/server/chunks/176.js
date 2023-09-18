"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ API_ENDPOINT),
/* harmony export */   V: () => (/* binding */ ENV)
/* harmony export */ });
const API_ENDPOINT = "https://public-api.wordpress.com/rest/v1.1/sites/";
const ENV = "asvaadmin.wpcomstaging.com"; // export const ENV = "staging-55d8-asvaadmin.wpcomstaging.com"


/***/ }),

/***/ 54:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function LatestCard({ spotifyLink, twitterLink, title, link, date, tags, authers, type }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        width: "100%",
        className: "border",
        py: 6,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            justifyContent: "space-between",
            flexDirection: {
                base: "column",
                md: "row"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    width: {
                        base: "100%",
                        md: "25%"
                    },
                    flexDirection: {
                        base: "row",
                        md: "column"
                    },
                    justifyContent: {
                        base: "space-between",
                        md: ""
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            color: "#4C545A",
                            fontSize: "16px",
                            fontFamily: "PowerGrotesk",
                            children: [
                                type,
                                " / ",
                                date
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            gap: 5,
                            mt: {
                                base: "0px",
                                md: 4
                            },
                            children: [
                                twitterLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: twitterLink,
                                    target: "_blank",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsTwitter, {
                                        style: {
                                            color: "#1D9BF0",
                                            fontSize: "32px"
                                        }
                                    })
                                }),
                                spotifyLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: spotifyLink,
                                    target: "_blank",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsSpotify, {
                                        style: {
                                            color: "#1ED760",
                                            fontSize: "32px"
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    width: {
                        base: "100%",
                        md: "75%"
                    },
                    mt: {
                        base: "10px",
                        md: 0
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: link,
                            className: "title-hover",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontSize: {
                                    base: "20px",
                                    md: "24px"
                                },
                                color: "#4C545A",
                                fontWeight: 500,
                                mb: 2,
                                fontFamily: "PowerGrotesk",
                                children: title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            gap: 5,
                            children: authers.map((auther, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: 14,
                                    color: "#8C9295",
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                    fontFamily: "PowerGrotesk",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            as: "span",
                                            display: "inline-block",
                                            marginRight: 2,
                                            children: "•"
                                        }),
                                        auther
                                    ]
                                }, index);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            gap: {
                                base: 2,
                                md: 2
                            },
                            mt: 3,
                            wrap: "wrap",
                            children: tags.map((tag, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
                                    size: {
                                        base: "sm",
                                        md: "md"
                                    },
                                    variant: "solid",
                                    background: "#6EFE96",
                                    color: "#1F1F1F",
                                    rounded: "full",
                                    padding: {
                                        base: "2px 8px",
                                        md: "2px 12px"
                                    },
                                    fontSize: {
                                        base: "12px",
                                        md: "14px"
                                    },
                                    children: tag
                                }, index);
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ dateFormate)
/* harmony export */ });
const dateFormate = (originalDate)=>{
    const dateObj = new Date(originalDate);
    // Define options for the date formatting
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    // Format the date using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat("en-US", // @ts-ignore
    options).format(dateObj);
    return formattedDate;
};


/***/ })

};
;