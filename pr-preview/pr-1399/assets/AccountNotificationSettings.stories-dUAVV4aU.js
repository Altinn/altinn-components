import{aa as g,a7 as t,c as u}from"./iframe-B1m5YS-z.js";import{A as S}from"./AccountNotificationSettings-C5XRIvnq.js";import{M as f,b as x,a as X}from"./ModalBody-ByLHH82k.js";import{L as C}from"./List-CPTEWjEJ.js";import{S as v}from"./SettingsItem-D_6UL9YE.js";import{B as j}from"./ButtonGroup-K8bkOi3q.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Cc82T6Mv.js";import"./Switch-Cqc-6BhM.js";import"./Field-3FnhLs8Z.js";import"./Input-DTp0ac3P.js";import"./Label-Cd3ICTIz.js";import"./TextField-DUJ3VIRd.js";import"./FieldBase-DF02WocK.js";import"./Typography-D-hgdwYf.js";import"./useHighlightedText-BJ6Snog5.js";import"./Section-BpRK9CgH.js";import"./Flex-ChmU5Mgr.js";import"./Avatar-Xyg1H9P0.js";import"./AvatarGroup-DadNExt3.js";import"./Heading-Bdg559v2.js";import"./ListItem-B0JtIYRQ.js";import"./Badge-D748IrqG.js";import"./Tooltip-3MKLVI5w.js";import"./ChevronUp-DD0NwdAM.js";import"./ChevronDown-VNvIPDL4.js";import"./ChevronRight-JufomwYQ.js";import"./SettingsItemBase-DFSvstNB.js";import"./ItemMedia-CbRgbp9l.js";import"./ItemBase-CK4FMGcd.js";import"./ItemLink-CGjdbANg.js";import"./ItemControls-DSpZnzMx.js";import"./SettingsModal-BcCqtHIO.js";import"./ButtonIcon-u2Ofnhum.js";import"./ButtonLabel-B0ghZbJS.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
