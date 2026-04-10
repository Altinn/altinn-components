import{r as g,j as t}from"./iframe-CfpleAaJ.js";import{A as S}from"./AccountNotificationSettings-Cr6XdVqj.js";import{B as u}from"./Button-DKJP6EaO.js";import{M as h}from"./ModalBase-BZf314E6.js";import{M as x,a as v}from"./ModalBody-BFcSEnBf.js";import{L as X}from"./List-Daw1OOj7.js";import{S as C}from"./SettingsItem-TFCtHSbx.js";import{B as j}from"./ButtonGroup-BCc6e8WW.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Bi9idR3x.js";import"./lite-DaUVFjkg.js";import"./index-CyGYnAy8.js";import"./use-merge-refs-0CqQhLRb.js";import"./Switch-jyXztMT7.js";import"./index-C-ZlSrx2.js";import"./Label-BNnaJGt0.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./TextField-BJh9knYm.js";import"./FieldBase-CjTWVBCf.js";import"./Typography-KZreLO9a.js";import"./useHighlightedText-Cf92T70c.js";import"./Skeleton-mkQz_xZ6.js";import"./button-bjClnooE.js";import"./Section-BT3IVwl3.js";import"./Flex-Buw28yn5.js";import"./XMark-Mr05NtnF.js";import"./useId-CRfl8v3D.js";import"./Icon-DFklvQ48.js";import"./Avatar-BBkC-qEC.js";import"./AvatarGroup-vSwCjNL5.js";import"./Heading-SalYmhoh.js";import"./ListItem-BnFFeCbH.js";import"./Badge-BZbseZdr.js";import"./ChevronUp-C1m4sJ12.js";import"./ChevronDown-QoYlkrAl.js";import"./ChevronRight-F6vNJ-SN.js";import"./SettingsItemBase-P2wKn9AB.js";import"./SettingsModal-Dv0AM5pv.js";import"./ButtonIcon-C5_cwnJG.js";import"./ButtonLabel-Dr2RfoaG.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:f,checked:A,name:d,value:B}=p.target;a(f==="checkbox"?l=>({...l,[d]:A}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(h,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(X,{children:t.jsx(C,{id:"bb",interactive:!1,icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(o,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
