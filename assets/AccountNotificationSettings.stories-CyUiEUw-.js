import{r as g,j as t}from"./iframe-xsOFb0qB.js";import{A as S}from"./AccountNotificationSettings-Bkt2OSQU.js";import{B as u}from"./Button-BpTRR-R2.js";import{M as f,a as x,b as X}from"./ModalBody-CU-34hyC.js";import{L as C}from"./List-BS8-H1t5.js";import{S as j}from"./SettingsItem-BA3Nt4Rt.js";import{B as v}from"./ButtonGroup-C6oYdo0U.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DgXA1yP2.js";import"./lite-DaUVFjkg.js";import"./index-CZjeF-Ef.js";import"./use-merge-refs-CVCJxog4.js";import"./Switch-D_4hH0ed.js";import"./index-C2Njje4x.js";import"./Label-CiIlYW7w.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./TextField-BfoCX5sC.js";import"./FieldBase-CVHmMMmY.js";import"./Typography-Bx2c3_US.js";import"./useHighlightedText-DlnkJmvJ.js";import"./Skeleton-DBfNAA4T.js";import"./button-_KGDSi7k.js";import"./Section-B92vWqdI.js";import"./Flex-D9aEciRT.js";import"./XMark-CIyVPbna.js";import"./useId-BSkX16Wf.js";import"./Icon-Bfs0jdaJ.js";import"./Avatar-n4A0Yiev.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Heading-CKV0OzUJ.js";import"./ListItem-BXgv5KEl.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DtTCTXgH.js";import"./ChevronDown-DgTX1k3o.js";import"./ChevronRight-C-KQY4Ee.js";import"./SettingsItemBase-Bj8jNJ8o.js";import"./ItemLink-D5ErANnm.js";import"./ItemMedia-J6PAjnJS.js";import"./ItemControls-a4lEiOE5.js";import"./SettingsModal-DY4S-rNA.js";import"./ButtonIcon-CgcH6LiT.js";import"./ButtonLabel-BYEs_GZq.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
