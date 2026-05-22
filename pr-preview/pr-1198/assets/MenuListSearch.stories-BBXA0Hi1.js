import{r as i,j as c}from"./iframe-DXwGEFZf.js";import{M as o}from"./SearchField-BCjbtpiQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpQTH4Pc.js";import"./MagnifyingGlass-CllD3bzP.js";import"./useId-Df52yuGg.js";import"./XMark-BspkucHC.js";import"./FieldBase-BwCMZAv_.js";import"./Typography-CegVoZkA.js";import"./useHighlightedText-NV3gg9HW.js";import"./Skeleton-CD7VUCi3.js";import"./Label-ChoE5xRO.js";import"./tooltip-OQNLf2nv.js";import"./Input-CjRvyA41.js";import"./Button-BcOfKjgE.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuListHeading-G6YR-18r.js";import"./MenuItem-COBQQf6N.js";import"./ItemMedia-C0bSIjdI.js";import"./Avatar-OxvpOCq4.js";import"./AvatarGroup-vB7eodsE.js";import"./Icon-DEVqj2eM.js";import"./Checkmark-DpC6lRZL.js";import"./Heading-D1SypAUR.js";import"./ItemControls-DXxKFox6.js";import"./ChevronRight-B7NrC3Rp.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";import"./InformationSquare-CathhXXw.js";const B={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: MenuListSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  return <MenuListSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
}`,...r.parameters?.docs?.source}}};const F=["Default","WithState"];export{t as Default,r as WithState,F as __namedExportsOrder,B as default};
