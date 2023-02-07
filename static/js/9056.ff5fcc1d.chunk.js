"use strict";(self.webpackChunkpiket=self.webpackChunkpiket||[]).push([[9056,1323,7691],{1091:function(e,a,t){t.d(a,{M:function(){return o}});var i=t(8284),r=t(1323),n=t(7691),s=t(184),o=function(e){var a=e.error.response,t=a.status,o=void 0===t?500:t,c=a.data,l=void 0===c?"Unable to process request.":c;return 404===o?(0,s.jsx)(i.default,{message:l}):403===o?(0,s.jsx)(r.default,{message:l}):(0,s.jsx)(n.default,{message:l})}},8355:function(e,a,t){var i=t(4165),r=t(5861),n=t(1413),s=t(885),o=t(2791),c=t(6871),l=t(4018),d=t(1933),m=t(4072),u=t(4621);a.Z=function(e){var a=e.props,t=e.formDefaultValues,f=e.afterSubmit,p=(0,l.Z)(),v=(0,m.Z)(),x=(0,c.UO)().pageid,g=(0,o.useState)(null),h=(0,s.Z)(g,2),j=h[0],b=h[1],N=(0,o.useState)(t),y=(0,s.Z)(N,2),k=y[0],S=y[1],w=(0,o.useState)(!1),P=(0,s.Z)(w,2),Z=P[0],D=P[1],C=a.id||x;C=C||"";var E="".concat(a.apiPath,"/").concat(C),M=(0,d.useQuery)([a.pageName,E],(function(){return v.get(E).then((function(e){return null===e||void 0===e?void 0:e.data}))}),{retry:!1}),_=M.isLoading,A=M.isError,R=M.data,V=M.error;(0,o.useEffect)((function(){if(R){var e=function(e){var a=(0,n.Z)({},e);return Object.keys(a).forEach((function(e){var i=a[e],r=t[e];Array.isArray(r)?a[e]=i?i.toString().split(","):r:r instanceof Date&&i&&(a[e]=new Date(i))})),a}(R);S(e),b(R),D(!0)}}),[R,A]);var q=(0,d.useQueryClient)(),J=(0,d.useMutation)((function(e){var a=function(e){var a=(0,n.Z)({},e);return Object.keys(a).forEach((function(e){var t=a[e];if(Array.isArray(t)){var i=t[0];a[e]=i&&"string"==typeof i?t.toString():t}else t instanceof Date?a[e]=t.toISOString().slice(0,19).replace("T"," "):""===t&&(a[e]=null)})),a}(e);return v.post(E,a).then((function(e){return null===e||void 0===e?void 0:e.data}))}),{retry:!1,onSuccess:function(e){q.invalidateQueries(a.pageName),f&&f(e)},onError:function(e){p.showPageRequestError(e)}});var T={currentRecord:j,formData:k,inputClassName:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w-full";return e?"".concat(a," p-invalid"):a},setFormData:S,handleSubmit:function(e,t){t.isValid||p.flashMsg(a.formValidationError,a.formValidationMsg,"error")},submitForm:function(e){var t=a.msgBeforeSave;t?(0,u.V)({header:a.msgTitle,message:t,icon:"pi pi-save",accept:function(){var a=(0,r.Z)((0,i.Z)().mark((function a(){return(0,i.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:J.mutate(e);case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),reject:function(){}}):J.mutate(e)},setCurrentRecord:b,pageReady:Z,saving:J.isLoading,loading:_,apiRequestError:V};return(0,o.useMemo)((function(){return T}),[k,j,Z,J.isLoading,_,V])}},1323:function(e,a,t){t.r(a);t(2791);var i=t(919),r=t(7162),n=t(4018),s=t(184),o=function(e){var a=(0,n.Z)();return(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"grid flex-column align-items-center card",children:[(0,s.jsx)("div",{className:"text-pink-500 font-bold text-5xl",children:"403"}),(0,s.jsx)(r.q,{size:"xlarge",icon:"pi pi-lock",className:"text-pink-500 bg-pink-100  my-4"}),(0,s.jsx)("div",{className:"text-900 font-medium text-3xl mb-2",children:e.message}),(0,s.jsx)("div",{className:"text-gray-600",children:"You do not have the necesary permisions. Please contact admins."}),(0,s.jsx)("div",{className:"mt-5 text-center",children:(0,s.jsx)(i.z,{onClick:function(){return a.navigate("/home")},icon:"pi pi-arrow-left",label:"Home"})})]})})};o.defaultProps={message:"Access Denied"},a.default=o},7691:function(e,a,t){t.r(a);t(2791);var i=t(919),r=t(7162),n=t(4018),s=t(184),o=function(e){var a=(0,n.Z)();return(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"grid flex-column align-items-center card",children:[(0,s.jsx)("div",{className:"text-pink-500 font-bold text-5xl",children:"500"}),(0,s.jsx)(r.q,{size:"xlarge",icon:"pi pi-lock",className:"text-pink-500 bg-pink-100  my-4"}),(0,s.jsx)("div",{className:"text-900 font-medium text-3xl mb-2",children:e.message}),(0,s.jsx)("div",{className:"text-gray-600",children:"An error occurred while processing your request. Please contact the Administrator for more information"}),(0,s.jsx)("div",{className:"mt-5 text-center",children:(0,s.jsx)(i.z,{onClick:function(){return a.navigate("/home")},icon:"pi pi-arrow-left",label:"Home"})})]})})};o.defaultProps={message:"Access Denied"},a.default=o},9056:function(e,a,t){t.r(a);var i=t(5705),r=t(9562),n=t(919),s=t(9025),o=t(1091),c=t(2557),l=t(3898),d=t(4018),m=t(8355),u=t(184),f=function(e){var a=(0,d.Z)(),t=r.Ry().shape({nama_jam:r.Z_().required().label("Jam Mengajar")}),f=(0,m.Z)({props:e,formDefaultValues:{nama_jam:""},afterSubmit:function(t){a.flashMsg(e.msgTitle,e.msgAfterSave),a.isDialogOpen()?a.closeDialogs():e.redirect&&a.navigate("/tbl_jam")}}),p=f.formData,v=f.handleSubmit,x=f.submitForm,g=f.pageReady,h=f.loading,j=f.saving,b=f.apiRequestError,N=f.inputClassName;return h?(0,u.jsx)("div",{className:"p-3 text-center",children:(0,u.jsx)(c.G,{style:{width:"50px",height:"50px"}})}):b?(0,u.jsx)(o.M,{error:b}):g?(0,u.jsxs)("main",{id:"TblJamEditPage",className:"main-page",children:[e.showHeader&&(0,u.jsx)("section",{className:"page-section mb-3",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"grid align-items-center",children:[!e.isSubPage&&(0,u.jsx)("div",{className:"col-fixed ",children:(0,u.jsx)(n.z,{onClick:function(){return a.navigate(-1)},label:"",className:"p-button p-button-text ",icon:"pi pi-arrow-left"})}),(0,u.jsx)("div",{className:"col ",children:(0,u.jsx)(l.D,{title:"Edit Tbl Jam",titleClass:"text-2xl text-primary font-bold",subTitleClass:"text-sm text-500",separator:!1})})]})})}),(0,u.jsx)("section",{className:"page-section ",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"grid ",children:(0,u.jsx)("div",{className:"md:col-9 sm:col-12 comp-grid",children:(0,u.jsx)("div",{children:(0,u.jsx)(i.J9,{initialValues:p,validationSchema:t,onSubmit:function(e,a){x(e)},children:function(a){var t;return(0,u.jsxs)(i.l0,{className:"".concat(e.isSubPage?"":"card "),children:[(0,u.jsx)("div",{className:"grid",children:(0,u.jsx)("div",{className:"col-12",children:(0,u.jsxs)("div",{className:"formgrid grid",children:[(0,u.jsx)("div",{className:"col-12 md:col-3",children:"Jam Mengajar *"}),(0,u.jsxs)("div",{className:"col-12 md:col-9",children:[(0,u.jsx)(s.o,{name:"nama_jam",onChange:a.handleChange,value:a.values.nama_jam,label:"Jam Mengajar",type:"text",placeholder:"Jam Mengajar",className:N(null===a||void 0===a||null===(t=a.errors)||void 0===t?void 0:t.nama_jam)}),(0,u.jsx)(i.Bc,{name:"nama_jam",component:"span",className:"p-error"})]})]})})}),e.showFooter&&(0,u.jsx)("div",{className:"text-center my-3",children:(0,u.jsx)(n.z,{onClick:function(e){return v(e,a)},type:"submit",label:"Perbaharui",icon:"pi pi-send",loading:j})})]})}})})})})})})]}):void 0};f.defaultProps={primaryKey:"id_jam",pageName:"tbl_jam",apiPath:"tbl_jam/edit",routeName:"tbl_jamedit",submitButtonLabel:"Perbaharui",formValidationError:"Form is invalid",formValidationMsg:"Please complete the form",msgTitle:"Update Record",msgAfterSave:"Data Berhasil Di Perbaharui !",msgBeforeSave:"",showHeader:!0,showFooter:!0,redirect:!0,isSubPage:!1},a.default=f}}]);
//# sourceMappingURL=9056.ff5fcc1d.chunk.js.map