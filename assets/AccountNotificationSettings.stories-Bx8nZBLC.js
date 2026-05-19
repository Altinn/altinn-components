import{r as g,j as t}from"./iframe-GJv3-kpe.js";import{A as S}from"./AccountNotificationSettings-BUkruI5U.js";import{B as u}from"./Button-XgEODhFb.js";import{M as f,a as x,b as X}from"./ModalBody-C4Y7ExYH.js";import{L as C}from"./List-4WWtcier.js";import{S as j}from"./SettingsItem-Zl-WEsCW.js";import{B as v}from"./ButtonGroup-CkGxccE7.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Dcg2wbOC.js";import"./lite-DaUVFjkg.js";import"./index-OoPsm9QB.js";import"./use-merge-refs-oF7p1rqv.js";import"./Switch-DmKXGw5v.js";import"./index-D19pPnAw.js";import"./Label-Bx3ShTJ6.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./TextField-Czkxag-i.js";import"./FieldBase-D2hpNZAE.js";import"./Typography-XN79jGlV.js";import"./useHighlightedText-ClfYglU-.js";import"./Skeleton-dVNdeapn.js";import"./button-5jjXov6B.js";import"./Section-BvBlt0Cn.js";import"./Flex-CxS25VqD.js";import"./XMark-D7blLnze.js";import"./useId-B1GQrjht.js";import"./Icon-DKgAzIsH.js";import"./Avatar-CGv-fnY8.js";import"./AvatarGroup-DxuzyW4n.js";import"./Heading-CiHDuood.js";import"./ListItem-D03tI2LI.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DpWMs-eZ.js";import"./ChevronDown-DZsHrJjp.js";import"./ChevronRight-C3wqtQo3.js";import"./SettingsItemBase-C5TELNS3.js";import"./ItemLink-Pose4tqX.js";import"./ItemMedia-45ogcwRE.js";import"./ItemControls-3C4JbZ3m.js";import"./SettingsModal-BtcjVjo_.js";import"./ButtonIcon-Bi2Ix8OH.js";import"./ButtonLabel-BZ1WKaDO.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
