import{r as g,j as t}from"./iframe-CHILL5tZ.js";import{A as S}from"./AccountNotificationSettings-BmpAhIm7.js";import{B as u}from"./Button-BhP7fHb4.js";import{M as f,a as x,b as X}from"./ModalBody-D4FH2jV5.js";import{L as C}from"./List-BcksO0y4.js";import{S as j}from"./SettingsItem-B2Lyxhvv.js";import{B as v}from"./ButtonGroup-85VHWPxh.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Dl54YQ74.js";import"./lite-DaUVFjkg.js";import"./index-ASxRsC3U.js";import"./use-merge-refs-BXZnV1dm.js";import"./Switch-BLGSmnhn.js";import"./index-D0JdUEkn.js";import"./Label-BmNpXiOX.js";import"./Input-F-jc7mgY.js";import"./input-BiYbaGgt.js";import"./TextField-BKpAQTe7.js";import"./FieldBase-DGrlYpX7.js";import"./Typography-BDbDV84g.js";import"./useHighlightedText-sycLCu80.js";import"./Skeleton-BX9QnUCy.js";import"./button-BIgBCVIC.js";import"./Section-DgehUQNo.js";import"./Flex-A7S1F2F0.js";import"./XMark-DQxCv5Yn.js";import"./useId-CxjMVxT3.js";import"./Icon-DK0uLDnk.js";import"./Avatar-BEHn6hs3.js";import"./AvatarGroup-9Hd8MZfa.js";import"./Heading-B80Wap_u.js";import"./ListItem-foRln84O.js";import"./Badge-DHaboY8X.js";import"./Tooltip-gqkYQCXG.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DXNAPjGw.js";import"./ChevronDown-D4I_nLcA.js";import"./ChevronRight-C2HiJ5JV.js";import"./SettingsItemBase-B9ImwOxd.js";import"./ItemLink-SjZ2P_5W.js";import"./ItemMedia-BDXURQdO.js";import"./ItemControls-Okligr0R.js";import"./SettingsModal-DqS_MZrV.js";import"./ButtonIcon-C3eOYnF4.js";import"./ButtonLabel-CO3yS6Gk.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Bt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,Bt as __namedExportsOrder,At as default};
