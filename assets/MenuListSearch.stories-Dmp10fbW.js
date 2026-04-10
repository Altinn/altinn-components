import{r as i,j as c}from"./iframe-DRbAvM8B.js";import{M as o}from"./SearchField-Q4hKdicz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dpt5RUeZ.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./useId-p3Uu13R2.js";import"./XMark-BeNK6Eym.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./useHighlightedText-DaUYVTi5.js";import"./Skeleton-C6w0Fovi.js";import"./Label-Zr8dB_9-.js";import"./index-Vs8aUpKw.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./Button-DXRH0CtL.js";import"./button-DB6SpB_q.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuListHeading-DYidFrGe.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./Avatar-DHw0Umd5.js";import"./AvatarGroup-BZTkgKpW.js";import"./Icon-BB196-C1.js";import"./Checkmark-BwvmX3W_.js";import"./Heading-aiLobBhZ.js";import"./ChevronRight-BIwAZUpi.js";import"./Badge-B0bOgxTq.js";import"./useMenu-BNYBCPCQ.js";import"./InformationSquare-Lr6VUhuh.js";const F={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
