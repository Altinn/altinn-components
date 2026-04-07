import{r as g,j as t}from"./iframe-BTgHnb1V.js";import{A as S}from"./AccountNotificationSettings-DHBH4Tdk.js";import{B as u}from"./Button-Ccau3b8T.js";import{M as h}from"./ModalBase-BVMwxguh.js";import{M as x,a as v}from"./ModalBody-QLR0FUOK.js";import{L as X}from"./List-D_Cei_q3.js";import{S as C}from"./SettingsItem-DDqCgUJp.js";import{B as j}from"./ButtonGroup-CI4RwwaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CUS2LJ5x.js";import"./lite-DaUVFjkg.js";import"./index-3lpPu1ww.js";import"./use-merge-refs-8A0H_t2p.js";import"./Switch-DG17p5gU.js";import"./index-t_Anj6Qz.js";import"./Label-DOnz6ye3.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./TextField-B9Bz6RJW.js";import"./FieldBase-B5jTEalp.js";import"./Typography-CR3zr5Vv.js";import"./useHighlightedText-DrZCsmQU.js";import"./Skeleton-B3M39f3D.js";import"./button-DAOqBeHz.js";import"./Section-B92QpPhv.js";import"./Flex-ujxLNWuk.js";import"./XMark-DMQzhoj3.js";import"./useId-DWidDjIe.js";import"./Icon-PY6OftAR.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Heading-Ca71xFkp.js";import"./ListItem-C5a5niC3.js";import"./Badge-sZl2g-is.js";import"./ChevronUp-Cx3Hy4Md.js";import"./ChevronDown-BdtQrLIc.js";import"./ChevronRight-DEDRS1St.js";import"./SettingsItemBase-DjpUHouN.js";import"./SettingsModal-C8T63fzD.js";import"./ButtonIcon-_poyNtkQ.js";import"./ButtonLabel-BxBMzqVA.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:f,checked:A,name:d,value:B}=p.target;a(f==="checkbox"?l=>({...l,[d]:A}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(h,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(X,{children:t.jsx(C,{id:"bb",interactive:!1,icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(o,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
  const [formData, setFormData] = useState({
    ...args
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      type,
      checked,
      name,
      value
    } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: checked
        };
      });
    } else {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: value
        };
      });
    }
  };
  return <AccountNotificationSettings {...args} {...formData} onChange={onChange} />;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  title = 'Aktør'
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Åpne modal</Button>
      <ModalBase open={open} onClose={onToggle}>
        <ModalHeader title={title}>
          <List>
            <SettingsItem id="bb" interactive={false} icon={{
            name: 'Bergen Bar',
            type: 'company'
          }} title="Bergen Bar" description="Org. nr. XXX XXX XXX" />
          </List>
        </ModalHeader>
        <ModalBody>
          <SmsAndEmailAlerts />
          <ButtonGroup>
            <Button onClick={onToggle}>Lagre og avslutt</Button>
            <Button onClick={onToggle} variant="outline">
              Avbryt
            </Button>
          </ButtonGroup>
        </ModalBody>
      </ModalBase>
    </>;
}`,...m.parameters?.docs?.source}}};const dt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,dt as __namedExportsOrder,ut as default};
