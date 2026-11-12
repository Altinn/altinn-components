var f=Object.defineProperty;var e=(n,a)=>f(n,"name",{value:a,configurable:!0});import{aa as S,a7 as t,c as d}from"./iframe-xlSYDLmX.js";import{A}from"./AccountNotificationSettings-Dews98SP.js";import{M as C,b as X,a as v}from"./ModalBody-2B3xwQox.js";import{L as j}from"./List-4DslVlnz.js";import{S as k}from"./SettingsItem-Bdv_RkCz.js";import{B as M}from"./ButtonGroup-CmZy2FTH.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-0GtgxPum.js";import"./Switch-GVxp4VPn.js";import"./Field-mWeCiqLp.js";import"./Input-r4bRN1Qy.js";import"./Label-DW6M7Jnl.js";import"./TextField-CPjrIzns.js";import"./FieldBase-CKEKDcDW.js";import"./Typography-CBKRdQ-b.js";import"./useHighlightedText-CTgwY4NQ.js";import"./Section-Dg4Yy1fe.js";import"./Flex-Brl5o9wf.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./Heading-DK8bpf-l.js";import"./ListItem-B7QDJ_pJ.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./ChevronUp-SNqOJLK8.js";import"./ChevronDown-BV4f9W92.js";import"./ChevronRight-WLOtysjI.js";import"./SettingsItemBase-CebRWWIM.js";import"./ItemMedia-DF0c3SDh.js";import"./ItemBase-D6wd74Ed.js";import"./ItemLink-DzpDCAH4.js";import"./ItemControls-Dlw9_sua.js";import"./SettingsModal-C1-SabfD.js";import"./ButtonIcon-C0Iduzzq.js";import"./ButtonLabel-DtsaJMNL.js";const ct={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},r=e(n=>{const[a,i]=S.useState({...n}),o=e(l=>{const{type:h,checked:B,name:g,value:x}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:x}))},"onChange");return t.jsx(A,{...n,...a,onChange:o})},"Controlled"),c=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:n="Aktør"})=>{const[a,i]=S.useState(!1),o=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:o,children:"Åpne modal"}),t.jsxs(C,{open:a,onClose:o,children:[t.jsx(X,{title:n,children:t.jsx(j,{children:t.jsx(k,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(M,{children:[t.jsx(d,{onClick:o,children:"Lagre og avslutt"}),t.jsx(d,{onClick:o,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal"),pt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};export{p as AccountNotificationsModal,r as Controlled,m as Default,c as SmsAlerts,s as SmsAndEmailAlerts,pt as __namedExportsOrder,ct as default};
