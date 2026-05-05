import{r as g,j as t}from"./iframe-0tjTS8nX.js";import{A as S}from"./AccountNotificationSettings-CrsTH33J.js";import{B as u}from"./Button-CyTdDQsP.js";import{M as f,a as x,b as X}from"./ModalBody-C_UFaejr.js";import{L as C}from"./List-lf1yby5Z.js";import{S as j}from"./SettingsItem-DLLy9LaI.js";import{B as v}from"./ButtonGroup-Rh1_zGFF.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-C-cEe-yh.js";import"./lite-DaUVFjkg.js";import"./index-BkdSX7Id.js";import"./use-merge-refs-C-O5ch3n.js";import"./Switch-B0wE7TCS.js";import"./index-BHkRJabC.js";import"./Label-DeD3NEAn.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./TextField-HOvQkZE2.js";import"./FieldBase-B4LLLb6y.js";import"./Typography-dEwOKrOW.js";import"./useHighlightedText-D9Q4aeek.js";import"./Skeleton-CiSYBb75.js";import"./button-Cld0y5Q3.js";import"./Section-CVxfq1Zs.js";import"./Flex-BjLBa1JB.js";import"./XMark-C6HGzv3s.js";import"./useId-DNFZveVv.js";import"./Icon-CEoRGh9j.js";import"./Avatar-DBihd_YJ.js";import"./AvatarGroup-Cy536atj.js";import"./Heading-KoSbgrW3.js";import"./ListItem-BchTOoTJ.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DEUjkNQ0.js";import"./ChevronDown-OiQKbBEs.js";import"./ChevronRight-DKBz6hgL.js";import"./SettingsItemBase-BnCBqOeC.js";import"./ItemLink-Rfzdlob3.js";import"./ItemMedia-DYrXvlN2.js";import"./ItemControls-C9C9Xohr.js";import"./SettingsModal-Zr84fz_q.js";import"./ButtonIcon-oMKrN6P3.js";import"./ButtonLabel-BqSuwMNK.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
