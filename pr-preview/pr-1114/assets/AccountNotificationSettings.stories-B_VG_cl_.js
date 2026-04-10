import{r as g,j as t}from"./iframe-BmFIVBn_.js";import{A as S}from"./AccountNotificationSettings-BrSDpGMp.js";import{B as u}from"./Button-qEoy6ct0.js";import{M as f}from"./ModalBase-C8uvGW6d.js";import{M as x,a as X}from"./ModalBody-DgmBWAGP.js";import{L as C}from"./List-DKOvmWxK.js";import{S as j}from"./SettingsItem-BsW-V_Xa.js";import{B as v}from"./ButtonGroup-DOYzKGQP.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-K6715TbB.js";import"./lite-DaUVFjkg.js";import"./index-32OlLxJ9.js";import"./use-merge-refs-C8jIJdDy.js";import"./Switch-72xu8gyc.js";import"./index-3BUTcXKg.js";import"./Label-D7uBca_a.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./TextField-DNty29AR.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./useHighlightedText-Dq-XqtYP.js";import"./Skeleton-DRn19mA6.js";import"./button-DKdxIprw.js";import"./Section-8wZRyHWu.js";import"./Flex-CFezmhlL.js";import"./XMark-DPeWQ31a.js";import"./useId-ClegSKnE.js";import"./Icon-zZDqlwOf.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Heading-D2Zb4ZMb.js";import"./ListItem-CaiNUw8w.js";import"./Badge-DoiHwmxA.js";import"./ChevronUp-DNi3P42Z.js";import"./ChevronDown-B_BWwBHT.js";import"./ChevronRight-DcRWf4tm.js";import"./SettingsItemBase-Ad-naNyj.js";import"./ItemLink-CbhqGqnO.js";import"./ItemMedia-CCYQNyqL.js";import"./ItemControls-B2xjI1HN.js";import"./SettingsModal-CSSxsvFR.js";import"./ButtonIcon-BhDAFAtm.js";import"./ButtonLabel-JoMzXma_.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const At=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,At as __namedExportsOrder,St as default};
