import{r as g,j as t}from"./iframe-CEV_bE_y.js";import{A as S}from"./AccountNotificationSettings-DW7U9xAY.js";import{B as u}from"./Button-Camg-mBZ.js";import{M as f}from"./ModalBase-CwOzpdoZ.js";import{M as x,a as X}from"./ModalBody-Dd72ulEZ.js";import{L as C}from"./List-C-GVcOeW.js";import{S as j}from"./SettingsItem-CjV96XmK.js";import{B as v}from"./ButtonGroup-D8NAEtXB.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CfS3hy3F.js";import"./lite-DaUVFjkg.js";import"./index-Cr9j_S5O.js";import"./use-merge-refs-Dqc3iuE1.js";import"./Switch-Br9M89v1.js";import"./index-CGpVDQnA.js";import"./Label-Cb-tqHHM.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./TextField-nDHukFGk.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./useHighlightedText-DdOlAfmT.js";import"./Skeleton-cNOPtI7P.js";import"./button-B-6jfb5R.js";import"./Section-BaBnzd0n.js";import"./Flex-BZtJmJL5.js";import"./XMark-ByuttVGc.js";import"./useId-BHfJgDBc.js";import"./Icon-BwPDmLy2.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Heading-CjHEKkoD.js";import"./ListItem-CqKn_y3x.js";import"./Badge-BVMw9Rw0.js";import"./ChevronUp-BgDvj3-f.js";import"./ChevronDown--HTcc5lI.js";import"./ChevronRight-Dck0Zh1j.js";import"./SettingsItemBase-CkTiyDOR.js";import"./ItemLink-CMOTTmp_.js";import"./ItemMedia-DIGN_0r9.js";import"./ItemControls-Dsxd0fj6.js";import"./SettingsModal-DtZkUiCe.js";import"./ButtonIcon-BdogZ2zC.js";import"./ButtonLabel-DcT85n25.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const At=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,At as __namedExportsOrder,St as default};
