import{aa as g,a7 as t,c as u}from"./iframe-DmJr8_aG.js";import{A as S}from"./AccountNotificationSettings-DxrYL783.js";import{M as f,b as x,a as X}from"./ModalBody-C0hCt4EK.js";import{L as C}from"./List-BYhLWM8c.js";import{S as v}from"./SettingsItem-COZXjv2F.js";import{B as j}from"./ButtonGroup-ps_HIdpu.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DGWXTvMx.js";import"./Switch-NPoiVkTV.js";import"./Field-z2_rHtRr.js";import"./Input-CMjX-VJR.js";import"./Label-C9gCQCNv.js";import"./TextField-Cv73iNpE.js";import"./FieldBase-B-b_vsUI.js";import"./Typography-B5vyFnSY.js";import"./useHighlightedText-CDpmDje8.js";import"./Section-xPiqNpLG.js";import"./Flex-D91Qf6jp.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./Heading-I9-B5g1d.js";import"./ListItem-8cwJLY10.js";import"./Badge-BVYKJFB5.js";import"./Tooltip-DijYReqr.js";import"./ChevronUp-C82RtbQz.js";import"./ChevronDown-hTjRae3D.js";import"./ChevronRight-kR30sXpx.js";import"./SettingsItemBase-CadGMhEl.js";import"./ItemMedia-BAIJH8U4.js";import"./ItemBase-DGqNBtsw.js";import"./ItemLink-CF3E9h13.js";import"./ItemControls-C3FVXvI0.js";import"./SettingsModal-B1XNc6l-.js";import"./ButtonIcon-lLWPwtnI.js";import"./ButtonLabel-CTdEbbj7.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
