import{r as g,j as t}from"./iframe-Bs6hWG43.js";import{A as S}from"./AccountNotificationSettings-BtgMTwPK.js";import{B as u}from"./Button-eHvnmE12.js";import{M as f}from"./ModalBase-DV93AE3m.js";import{M as x,a as X}from"./ModalBody-CrrxtmpE.js";import{L as C}from"./List-DX6kg0jD.js";import{S as j}from"./SettingsItem-Br4qglkV.js";import{B as v}from"./ButtonGroup-eeakMgVk.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BwyKCbpr.js";import"./lite-DaUVFjkg.js";import"./index--1NR6hdE.js";import"./use-merge-refs-CXrn4uAk.js";import"./Switch-Dn8rI5yW.js";import"./index-DbNSDn3W.js";import"./Label-CqwIAbNx.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./TextField-Bs7eKmuu.js";import"./FieldBase-BwWmF8XK.js";import"./Typography-4Wb6MR64.js";import"./useHighlightedText-ByR3-iok.js";import"./Skeleton-7NyHq6Da.js";import"./button-BtRKSTW7.js";import"./Section-W4Lgx5KJ.js";import"./Flex-DYzITT_K.js";import"./XMark-Cx14Anho.js";import"./useId-eW1Sa_eP.js";import"./Icon-DjH00Hl5.js";import"./Avatar-BN7VNN79.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Heading-C3DAZ3La.js";import"./ListItem-CFwb-TRN.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-C8EAI3hT.js";import"./ChevronDown-DB4qADPw.js";import"./ChevronRight-Xe9lB9nu.js";import"./SettingsItemBase-BnErxulw.js";import"./ItemLink-kBPqIX3U.js";import"./ItemMedia-B6-8h9P0.js";import"./ItemControls-CsoavSOP.js";import"./SettingsModal-DEchxt9k.js";import"./ButtonIcon-B6MS48OU.js";import"./ButtonLabel-D0_5jgqT.js";const Bt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ht=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,ht as __namedExportsOrder,Bt as default};
