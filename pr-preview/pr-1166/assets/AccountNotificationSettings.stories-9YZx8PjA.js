import{r as g,j as t}from"./iframe-u1jxS1Oq.js";import{A as S}from"./AccountNotificationSettings-BC_ZdRzd.js";import{B as u}from"./Button-BY9-KzE0.js";import{M as f,a as x,b as X}from"./ModalBody-B6zTqt0m.js";import{L as C}from"./List-C92-pb3T.js";import{S as j}from"./SettingsItem-CfDTbgD6.js";import{B as v}from"./ButtonGroup-DTQJ7yTP.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BjznVQqm.js";import"./lite-DaUVFjkg.js";import"./index-Cx6LUCQB.js";import"./use-merge-refs-DeN80SPN.js";import"./Switch-D4bzAeVp.js";import"./index-CuIYfQx6.js";import"./Label-D4ujXpAq.js";import"./Input-BNqEyP7x.js";import"./input-y4RbUeVJ.js";import"./TextField-j_RgJ9ji.js";import"./FieldBase-BcXnInHB.js";import"./Typography-DJdlSKXp.js";import"./useHighlightedText-Cgx_Ij05.js";import"./Skeleton-vSjDGrjA.js";import"./button-CanOz9MC.js";import"./Section-Dvplgvae.js";import"./Flex-CjSLdTf-.js";import"./XMark-Bsujigqn.js";import"./useId-MxiBxM6f.js";import"./Icon-DjXLk3vD.js";import"./Avatar-DVgGPyAb.js";import"./AvatarGroup-B0Rqd5X-.js";import"./Heading-B6H8IHeT.js";import"./ListItem-jEtnNQRv.js";import"./Badge-DEnx77R3.js";import"./Tooltip-DbCog91V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-D1SaIjFK.js";import"./ChevronDown-CLYLhVpz.js";import"./ChevronRight-Dx4m7R44.js";import"./SettingsItemBase-DcS_4Gld.js";import"./ItemLink-kNypsHgk.js";import"./ItemMedia-Dn5ydfd9.js";import"./ItemControls-GTSartAy.js";import"./SettingsModal-CCm32NkT.js";import"./ButtonIcon-B-G62crO.js";import"./ButtonLabel--2iSlRcT.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
