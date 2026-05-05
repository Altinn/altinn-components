import{r as i,j as c}from"./iframe-0tjTS8nX.js";import{M as o}from"./SearchField-AyG5Put8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHkRJabC.js";import"./MagnifyingGlass-Djl9xGro.js";import"./useId-DNFZveVv.js";import"./XMark-C6HGzv3s.js";import"./FieldBase-B4LLLb6y.js";import"./Typography-dEwOKrOW.js";import"./useHighlightedText-D9Q4aeek.js";import"./Skeleton-CiSYBb75.js";import"./Label-DeD3NEAn.js";import"./index-BkdSX7Id.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./Button-CyTdDQsP.js";import"./button-Cld0y5Q3.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./Avatar-DBihd_YJ.js";import"./AvatarGroup-Cy536atj.js";import"./Icon-CEoRGh9j.js";import"./Checkmark-DcFVdWi8.js";import"./Heading-KoSbgrW3.js";import"./ItemControls-C9C9Xohr.js";import"./ChevronRight-DKBz6hgL.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DGQxaY-L.js";import"./InformationSquare-j6Jk7iQg.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const N=["Default","WithState"];export{t as Default,r as WithState,N as __namedExportsOrder,K as default};
