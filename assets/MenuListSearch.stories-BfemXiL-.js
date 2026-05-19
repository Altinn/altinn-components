import{r as i,j as c}from"./iframe-GJv3-kpe.js";import{M as o}from"./SearchField-D4OrqN5V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D19pPnAw.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./useId-B1GQrjht.js";import"./XMark-D7blLnze.js";import"./FieldBase-D2hpNZAE.js";import"./Typography-XN79jGlV.js";import"./useHighlightedText-ClfYglU-.js";import"./Skeleton-dVNdeapn.js";import"./Label-Bx3ShTJ6.js";import"./index-OoPsm9QB.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./MenuListItem-BuleDevk.js";import"./MenuListHeading-w-EtPB4c.js";import"./MenuItem-CRhKMxAm.js";import"./ItemMedia-45ogcwRE.js";import"./Avatar-CGv-fnY8.js";import"./AvatarGroup-DxuzyW4n.js";import"./Icon-DKgAzIsH.js";import"./Checkmark-DXLqUvZZ.js";import"./Heading-CiHDuood.js";import"./ItemControls-3C4JbZ3m.js";import"./ChevronRight-C3wqtQo3.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-D_O6qRR4.js";import"./index-CNHiDjij.js";import"./InformationSquare-Crm3l9Sr.js";const N={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const U=["Default","WithState"];export{t as Default,r as WithState,U as __namedExportsOrder,N as default};
