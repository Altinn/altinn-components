import{r as i,j as c}from"./iframe-xsOFb0qB.js";import{M as o}from"./SearchField-CkGqv4yc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2Njje4x.js";import"./MagnifyingGlass--8bC5kd2.js";import"./useId-BSkX16Wf.js";import"./XMark-CIyVPbna.js";import"./FieldBase-CVHmMMmY.js";import"./Typography-Bx2c3_US.js";import"./useHighlightedText-DlnkJmvJ.js";import"./Skeleton-DBfNAA4T.js";import"./Label-CiIlYW7w.js";import"./index-CZjeF-Ef.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuListHeading-DQRtBG1I.js";import"./MenuItem-Dd-G4Q8o.js";import"./ItemMedia-J6PAjnJS.js";import"./Avatar-n4A0Yiev.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Icon-Bfs0jdaJ.js";import"./Checkmark-Bxt0Ippd.js";import"./Heading-CKV0OzUJ.js";import"./ItemControls-a4lEiOE5.js";import"./ChevronRight-C-KQY4Ee.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";import"./InformationSquare-DdLgqmyX.js";const N={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
