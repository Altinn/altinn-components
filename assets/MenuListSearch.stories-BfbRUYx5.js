import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{i as r}from"./SearchField-Bjd6cmAs.js";var i=e(t(),1),a=n(),o={title:`Menu/MenuSearch`,component:r,tags:[`autodocs`],parameters:{},args:{name:`menu-search`,placeholder:`Type to search`,onClear:()=>{},onChange:()=>{}}},s={args:{}},c=e=>{let[t,n]=(0,i.useState)(``),o=e=>{n(e.target.value)},s=()=>{n(``)};return(0,a.jsx)(r,{...e,value:t,onChange:o,onClear:s})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: MenuListSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  return <MenuListSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`WithState`];export{s as Default,c as WithState,l as __namedExportsOrder,o as default};