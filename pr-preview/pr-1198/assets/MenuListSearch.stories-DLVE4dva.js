import{r as i,j as c}from"./iframe-CbC-fLaY.js";import{M as o}from"./SearchField-yE8KzlZV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ds9VDGIC.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./useId-C2JQsT24.js";import"./XMark-DvUzU3_h.js";import"./FieldBase-D2jwyGQb.js";import"./Typography-BWnrNFau.js";import"./useHighlightedText-BssbQrxH.js";import"./Skeleton-D8kEQByH.js";import"./Label-DN-jQPwh.js";import"./tooltip-BtbQ4KG6.js";import"./Input-BNbo7Vjn.js";import"./Button-B0m1rUs2.js";import"./MenuListItem-DBiuOcpf.js";import"./MenuListHeading-C1HjQPPY.js";import"./MenuItem-BUq3aL73.js";import"./ItemMedia-CsSXB_1W.js";import"./Avatar-CmrLTlqi.js";import"./AvatarGroup-CtTcTi_X.js";import"./Icon-DW3Nd0-m.js";import"./Checkmark-8GuDUS8U.js";import"./Heading-Bl7p7Gle.js";import"./ItemControls-gQT1qCQ5.js";import"./ChevronRight-CThQJEOF.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./useMenu-a79SM2ar.js";import"./index-DDRVeLeZ.js";import"./InformationSquare-CQq7uvJQ.js";const B={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
