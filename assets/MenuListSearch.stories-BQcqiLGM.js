import{s as i,p as c}from"./iframe-WHERbRNQ.js";import{b as o}from"./SearchField-CjOGKjR9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPQpJFkN.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./useId-BfbJ7PbP.js";import"./XMark-5kXogJ_J.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useHighlightedText-CCsQk8zm.js";import"./Skeleton-rNcUZaAx.js";import"./Label-DoBAei1C.js";import"./tooltip-C7TGaz5I.js";import"./Input-D2AEap14.js";import"./Button-DkTjWAj1.js";import"./useMenu-DdbFwnvU.js";import"./MenuListItem-Gq-dCZ2a.js";import"./MenuListHeading-B72ED6_O.js";import"./MenuItem-BN2QDxa4.js";import"./ItemMedia-CZ4j0uoG.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./Heading-POmwd9W2.js";import"./ItemControls-CXMEe70O.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./ChevronRight-HD9xUhWG.js";import"./index-Cy4S4a6-.js";import"./InformationSquare-DqU7vShm.js";const F={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[s,e]=i.useState(""),n=m=>{e(m.target.value)},p=()=>{e("")};return c.jsx(o,{...a,value:s,onChange:n,onClear:p})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const G=["Default","WithState"];export{t as Default,r as WithState,G as __namedExportsOrder,F as default};
