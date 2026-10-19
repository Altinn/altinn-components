var x=Object.defineProperty;var e=(o,a)=>x(o,"name",{value:a,configurable:!0});import{aa as S,a7 as t,c as d}from"./iframe-uBWg0zsp.js";import{A}from"./AccountNotificationSettings-CPdGI5N4.js";import{M as X,b as C,a as v}from"./ModalBody-BN9ps4gr.js";import{L as j}from"./List-CPfTuEIO.js";import{S as k}from"./SettingsItem-BKissoEa.js";import{B as M}from"./ButtonGroup-C6ZuBQRD.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-CgObqsoW.js";import"./Switch-dVR22df8.js";import"./Field-CRhxlWe8.js";import"./Input-BX-kD412.js";import"./Label-BasS1jKP.js";import"./TextField-Bm0uOHKU.js";import"./FieldBase-Bze69qIO.js";import"./Typography-nYxE8-3g.js";import"./useHighlightedText-SyZl2q2q.js";import"./Section-B5mZZWwm.js";import"./Flex-DndVrHjj.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Heading-B2wyz-tz.js";import"./ListItem-DZSp_PZG.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./ChevronUp-BLeJynbN.js";import"./ChevronDown-DVkqLj7d.js";import"./ChevronRight-Ci7fQup2.js";import"./SettingsItemBase-Dqw8W-AX.js";import"./ItemMedia-DYHGe3r3.js";import"./ItemBase-DJIQNQsT.js";import"./ItemLink-DAu62COd.js";import"./ItemControls-D7ku9ps1.js";import"./SettingsModal-BznIzZKL.js";import"./ButtonIcon-CRTvNn4A.js";import"./ButtonLabel-BCgwFtnQ.js";const ct={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},n=e(o=>{const[a,i]=S.useState({...o}),r=e(l=>{const{type:h,checked:B,name:g,value:f}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:f}))},"onChange");return t.jsx(A,{...o,...a,onChange:r})},"Controlled"),c=e(()=>t.jsx(n,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(n,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:o="Aktør"})=>{const[a,i]=S.useState(!1),r=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:r,children:"Åpne modal"}),t.jsxs(X,{open:a,onClose:r,children:[t.jsx(C,{title:o,children:t.jsx(j,{children:t.jsx(k,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(M,{children:[t.jsx(d,{onClick:r,children:"Lagre og avslutt"}),t.jsx(d,{onClick:r,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const pt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{p as AccountNotificationsModal,n as Controlled,m as Default,c as SmsAlerts,s as SmsAndEmailAlerts,pt as __namedExportsOrder,ct as default};
