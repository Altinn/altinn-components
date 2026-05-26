import{s as g,p as t}from"./iframe-Ca1pxjCh.js";import{A as S}from"./AccountNotificationSettings-C4GMLd10.js";import{B as u}from"./Button-BUoYLOjU.js";import{M as f,b as x,a as X}from"./ModalBody-DfLjWzAx.js";import{L as C}from"./List-m_iXYTHM.js";import{S as v}from"./SettingsItem-B_rocGkp.js";import{B as j}from"./ButtonGroup-Bt3kIkZr.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Pq_bUFFC.js";import"./tooltip-DBInG_0S.js";import"./Switch-bAE40bod.js";import"./index-qsemo-NB.js";import"./Label-Dpkw0Wq9.js";import"./Input-CnEzvrKf.js";import"./TextField-B4w005z3.js";import"./FieldBase-B_jWg1W2.js";import"./Typography-B47euKof.js";import"./useHighlightedText-B4z3dUTF.js";import"./Skeleton-CjJRr45L.js";import"./Section-BSLTGuDV.js";import"./Flex-CU26bbCS.js";import"./XMark-D_G5yHBr.js";import"./useId-DKdvhqLE.js";import"./Icon-DX2teY26.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Heading-BWtrIkld.js";import"./ListItem-ByBUwGe5.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./ChevronUp-njmytnHj.js";import"./ChevronDown-BSf8h3gX.js";import"./ChevronRight-Dx7-HhpA.js";import"./SettingsItemBase-BRIpfFkf.js";import"./ItemMedia-B1dbthGB.js";import"./ItemLink-BZQvVEJ1.js";import"./ItemControls-CcgtvJvT.js";import"./SettingsModal-BhsIDBtl.js";import"./ButtonIcon-DcnGBPH8.js";import"./ButtonLabel-VpsJZKmQ.js";const lt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:B,name:d,value:h}=p.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ut=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,o as Controlled,s as Default,i as SmsAlerts,r as SmsAndEmailAlerts,ut as __namedExportsOrder,lt as default};
