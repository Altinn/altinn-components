import{aa as g,a7 as t,c as u}from"./iframe-qmQCxFa-.js";import{A as S}from"./AccountNotificationSettings-DQ1J3kaw.js";import{M as f,b as x,a as X}from"./ModalBody-90KYXdlU.js";import{L as C}from"./List-66Jmre4e.js";import{S as v}from"./SettingsItem-B1lcK7bm.js";import{B as j}from"./ButtonGroup-_CfbD1Th.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CbQCH3wO.js";import"./Switch-BpxOeCv0.js";import"./Field-CR7g45g-.js";import"./Input-UWmslA08.js";import"./Label-p7H0Mohi.js";import"./TextField-BtJt0HFX.js";import"./FieldBase-uaodyCSq.js";import"./Typography-CwhPNAxM.js";import"./useHighlightedText-DvW-80BF.js";import"./Section-DIAhVmeV.js";import"./Flex-Da8DWGDO.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./Heading-BfhEliS6.js";import"./ListItem-TUtQYaSN.js";import"./Badge-B_bsLQj9.js";import"./Tooltip-B9panzD0.js";import"./ChevronUp-D-ejY9oL.js";import"./ChevronDown-B2_8CHiS.js";import"./ChevronRight-D4PJikp-.js";import"./SettingsItemBase-DSkR0SRZ.js";import"./ItemMedia-Ch0GCbf9.js";import"./ItemBase-BQ6Vg0LW.js";import"./ItemLink-CpI2Nssx.js";import"./ItemControls-BNv7LYwf.js";import"./SettingsModal-BgKQBtSZ.js";import"./ButtonIcon-BsscKFAt.js";import"./ButtonLabel-B8phRdNa.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
            <SettingsItem id="bb" icon={{
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
}`,...m.parameters?.docs?.source}}};const it=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,o as Controlled,s as Default,i as SmsAlerts,r as SmsAndEmailAlerts,it as __namedExportsOrder,st as default};
