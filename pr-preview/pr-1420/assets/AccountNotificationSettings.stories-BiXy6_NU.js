import{aa as g,a7 as t,c as u}from"./iframe-BidFzEoe.js";import{A as S}from"./AccountNotificationSettings-Zi017NKh.js";import{M as f,b as x,a as X}from"./ModalBody-BGmAjdb1.js";import{L as C}from"./List-Ct336t9y.js";import{S as v}from"./SettingsItem-wCIm7MUu.js";import{B as j}from"./ButtonGroup-BDN4dAIH.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BWu0GvMP.js";import"./Switch-Ip2cuLJk.js";import"./Field-BqmdGdCd.js";import"./Input-D8eTVnZO.js";import"./Label-BzAQ2d9C.js";import"./TextField-mKP-hw_s.js";import"./FieldBase-q2Ok1lDz.js";import"./Typography-BKRo6hXJ.js";import"./useHighlightedText-B2dzt3_l.js";import"./Section-D00_D8ux.js";import"./Flex-BXtaAm49.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Heading-XBMlN0kz.js";import"./ListItem-CBUxCLcG.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./ChevronUp-CbJE0St5.js";import"./ChevronDown-7vjdyvrh.js";import"./ChevronRight-B3flyXKQ.js";import"./SettingsItemBase-CtYPnu_3.js";import"./ItemMedia-DzAOMVpV.js";import"./ItemBase-mIr4q6rQ.js";import"./ItemLink-C3ysbGvA.js";import"./ItemControls-5057Wt3J.js";import"./SettingsModal-Lyf15yKp.js";import"./ButtonIcon-BtY_BXUj.js";import"./ButtonLabel-ym8yEuVp.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
