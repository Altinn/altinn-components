"use client";import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./ChevronDown-DDyiqThZ.js";import{t as i}from"./ChevronUp-DvOzyOk6.js";import{t as a}from"./MenuItem-C3c-u6lb.js";import{t as o}from"./Badge-BYXOeMxo.js";import{t as s}from"./Icon-DrLPdusd.js";import{t as c}from"./useClickOutside-CoRJWJ9F.js";import{t as l}from"./Input-Dfidslyx.js";import{t as u}from"./FieldBase-CtZQXpp3.js";import{n as d,t as f}from"./MenuListItem-D9B0Huzi.js";import{t as p}from"./DropdownBase-CKYBnkht.js";var m=e(t(),1),h={container:`_container_8jcxe_1`,input:`_input_8jcxe_7`,badge:`_badge_8jcxe_15`,dropdownTrigger:`_dropdownTrigger_8jcxe_36`,dropdown:`_dropdown_8jcxe_36`,menuItem:`_menuItem_8jcxe_81`,optionBadge:`_optionBadge_8jcxe_88`},g=n(),_=({label:e,helperText:t,value:n=``,onChange:_,options:v,validate:y,badge:b,disabled:x,size:S,color:C,className:w,...T})=>{let E=(0,m.useId)(),[D,O]=(0,m.useState)(!1),[k,A]=(0,m.useState)(n),[j,M]=(0,m.useState)(-1),[N,P]=(0,m.useState)(null),F=(0,m.useRef)(null),I=(0,m.useRef)(null),L=(0,m.useRef)(null);c(F,()=>{D&&(O(!1),M(-1))});let R=(0,m.useMemo)(()=>k?v.filter(e=>e.label.toLowerCase().includes(k.toLowerCase())):v,[k,v]);(0,m.useEffect)(()=>{A(n)},[n]),(0,m.useEffect)(()=>{if(!y)return;let e=setTimeout(()=>{let e=y(k);P(typeof e==`string`?e:e?null:`Invalid value`)},300);return()=>clearTimeout(e)},[k,y]),(0,m.useEffect)(()=>{if(x||!k)return;let e=R.some(e=>e.label.toLowerCase()===k.toLowerCase());R.length>0&&!e&&!D?O(!0):D&&R.length===0&&O(!1)},[k,R,D,x]);let z=(0,m.useCallback)(e=>{let t=e.target.value;A(t),_?.(t)},[_]),B=(0,m.useCallback)(e=>{A(e.label),_?.(e.value),O(!1),M(-1),I.current?.focus()},[_]),V=(0,m.useCallback)(()=>{x||(D?(O(!1),M(-1)):R.length>0&&O(!0))},[x,D,R.length]),H=N?`danger`:C;return(0,g.jsx)(u,{size:S,color:H,label:e,helperText:N||t,className:w,children:(0,g.jsxs)(`div`,{className:h.container,ref:F,children:[(0,g.jsx)(l,{...T,ref:I,value:k,onChange:z,disabled:x,size:S,color:H,className:h.input,role:`combobox`,"aria-expanded":D,"aria-controls":E,"aria-autocomplete":`list`,"aria-activedescendant":j>=0?`${E}-option-${j}`:void 0,"aria-invalid":!!N,"aria-describedby":N?`${E}-error`:void 0,"data-has-badge":!!b}),b&&(0,g.jsx)(`span`,{className:h.badge,children:(0,g.jsx)(o,{label:b.label,color:b.color,variant:b.variant||`subtle`,size:`sm`})}),(0,g.jsx)(`button`,{type:`button`,className:h.dropdownTrigger,onClick:V,disabled:x,"aria-label":D?`Close dropdown`:`Open dropdown`,tabIndex:-1,children:(0,g.jsx)(s,{svgElement:D?i:r})}),(0,g.jsx)(p,{open:D,onClose:()=>O(!1),as:`div`,className:h.dropdown,children:(0,g.jsx)(`div`,{id:E,ref:L,role:`listbox`,children:(0,g.jsx)(d,{role:`group`,children:R.map((e,t)=>(0,g.jsx)(f,{children:(0,g.jsx)(a,{id:`${E}-option-${t}`,role:`option`,"aria-selected":e.value===n,"data-active":j===t,onClick:()=>!e.disabled&&B(e),disabled:e.disabled,as:`div`,title:e.label,badge:e.badge})},e.value))})})})]})})},v={title:`Forms/TextFieldDropdown`,component:_,parameters:{layout:`padded`},tags:[`autodocs`]},y=[{value:`john@example.com`,label:`john@example.com`},{value:`jane@example.com`,label:`jane@example.com`},{value:`bob@example.com`,label:`bob@example.com`},{value:`alice@company.com`,label:`alice@company.com`},{value:`matias@gmail.com`,label:`matias@gmail.com`}],b={args:{label:`E-postadresse`,placeholder:`Enter email`,options:y}},x={args:{label:`E-postadresse`,value:`matias@gmail.com`,options:y,badge:{label:`Verifisert`,color:`success`,variant:`subtle`}}},S={args:{label:`E-postadresse`,placeholder:`Select or enter email`,options:[{value:`verified@example.com`,label:`verified@example.com`,badge:{label:`Verified`,color:`success`,variant:`subtle`}},{value:`unverified@example.com`,label:`unverified@example.com`,badge:{label:`Unverified`,color:`warning`,variant:`subtle`}},{value:`blocked@example.com`,label:`blocked@example.com`,badge:{label:`Blocked`,color:`danger`,variant:`subtle`}},{value:`pending@example.com`,label:`pending@example.com`,badge:{label:`Pending`,color:`info`,variant:`subtle`}}]}},C={args:{label:`E-postadresse`,placeholder:`Enter valid email`,options:y,helperText:`Please enter a valid email address`,validate:e=>e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?!0:`Please enter a valid email address`:`Email is required`}},w=e=>{let[t,n]=(0,m.useState)(``);return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(_,{...e,value:t,onChange:n,label:`E-postadresse`,placeholder:`Select or enter email`,options:y,helperText:`Current value: ${t||`none`}`}),(0,g.jsxs)(`div`,{style:{marginTop:`1rem`,padding:`1rem`,background:`#f5f5f5`,borderRadius:`4px`},children:[(0,g.jsx)(`strong`,{children:`Selected value:`}),` `,t||`none`]})]})},T={args:{label:`E-postadresse`,value:`user@example.com`,options:y,disabled:!0,helperText:`This field is disabled`}},E={args:{label:`E-postadresse`,placeholder:`Enter or select email`,options:y,helperText:`We will send a verification email to this address`}},D={args:{label:`E-postadresse`,placeholder:`Enter email`,options:[],helperText:`No suggestions available - enter your email address`}},O={args:{label:`Select User`,placeholder:`Search users`,options:Array.from({length:50},(e,t)=>({value:`user${t}@example.com`,label:`user${t}@example.com`})),helperText:`Scroll through the dropdown to see all options`}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: emailOptions
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    value: 'matias@gmail.com',
    options: emailOptions,
    badge: {
      label: 'Verifisert',
      color: 'success',
      variant: 'subtle'
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Select or enter email',
    options: [{
      value: 'verified@example.com',
      label: 'verified@example.com',
      badge: {
        label: 'Verified',
        color: 'success',
        variant: 'subtle'
      }
    }, {
      value: 'unverified@example.com',
      label: 'unverified@example.com',
      badge: {
        label: 'Unverified',
        color: 'warning',
        variant: 'subtle'
      }
    }, {
      value: 'blocked@example.com',
      label: 'blocked@example.com',
      badge: {
        label: 'Blocked',
        color: 'danger',
        variant: 'subtle'
      }
    }, {
      value: 'pending@example.com',
      label: 'pending@example.com',
      badge: {
        label: 'Pending',
        color: 'info',
        variant: 'subtle'
      }
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter valid email',
    options: emailOptions,
    helperText: 'Please enter a valid email address',
    validate: (value: string) => {
      if (!value) return 'Email is required';
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return emailRegex.test(value) ? true : 'Please enter a valid email address';
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args: TextFieldDropdownProps) => {
  const [value, setValue] = useState('');
  return <div>
      <TextFieldDropdown {...args} value={value} onChange={setValue} label="E-postadresse" placeholder="Select or enter email" options={emailOptions} helperText={\`Current value: \${value || 'none'}\`} />
      <div style={{
      marginTop: '1rem',
      padding: '1rem',
      background: '#f5f5f5',
      borderRadius: '4px'
    }}>
        <strong>Selected value:</strong> {value || 'none'}
      </div>
    </div>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    value: 'user@example.com',
    options: emailOptions,
    disabled: true,
    helperText: 'This field is disabled'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter or select email',
    options: emailOptions,
    helperText: 'We will send a verification email to this address'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: [],
    helperText: 'No suggestions available - enter your email address'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select User',
    placeholder: 'Search users',
    options: Array.from({
      length: 50
    }, (_, i) => ({
      value: \`user\${i}@example.com\`,
      label: \`user\${i}@example.com\`
    })),
    helperText: 'Scroll through the dropdown to see all options'
  }
}`,...O.parameters?.docs?.source}}};var k=[`Default`,`WithBadge`,`WithOptionBadges`,`WithValidation`,`Controlled`,`Disabled`,`WithHelperText`,`EmptyOptions`,`ManyOptions`];export{w as Controlled,b as Default,T as Disabled,D as EmptyOptions,O as ManyOptions,x as WithBadge,E as WithHelperText,S as WithOptionBadges,C as WithValidation,k as __namedExportsOrder,v as default};