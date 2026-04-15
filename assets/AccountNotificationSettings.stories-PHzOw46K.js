import{r as g,j as t}from"./iframe-Bka3lqwZ.js";import{A as S}from"./AccountNotificationSettings-Be2imGmK.js";import{B as u}from"./Button-DIVYOCsY.js";import{M as f}from"./ModalBase-BcOJelni.js";import{M as x,a as X}from"./ModalBody-erGC5Qsu.js";import{L as C}from"./List-DrMi80p5.js";import{S as j}from"./SettingsItem-Dj6ZQkm0.js";import{B as v}from"./ButtonGroup-DnIZGAD0.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CsRJap2-.js";import"./lite-DaUVFjkg.js";import"./index-CQEQ6FSB.js";import"./use-merge-refs-CTw0OEaY.js";import"./Switch-BEx3_1xn.js";import"./index-97QH58ax.js";import"./Label-Bo_SdTne.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./TextField-ml4b6CR9.js";import"./FieldBase-BlSXl2oz.js";import"./Typography-CMwGEMpO.js";import"./useHighlightedText-DGjnrdw2.js";import"./Skeleton-ECUY2hPc.js";import"./button-CqWrgnGb.js";import"./Section-DgAAlgWN.js";import"./Flex-CDu7UET9.js";import"./XMark-BopKFElT.js";import"./useId-BOUKUp4S.js";import"./Icon-DoXRGO_6.js";import"./Avatar-DUWR3kRV.js";import"./AvatarGroup-mAK5Ma76.js";import"./Heading-BxCaPg4n.js";import"./ListItem-CvqbKmOV.js";import"./Badge-Dr-ny6rj.js";import"./ChevronUp-1mXV-FY3.js";import"./ChevronDown-7HdAqi_x.js";import"./ChevronRight-1C-HJkAE.js";import"./SettingsItemBase-B0z-i7MF.js";import"./ItemLink-C9-2FncN.js";import"./ItemMedia-Ca3m8l5m.js";import"./ItemControls-abhSx9yX.js";import"./SettingsModal-Df_Asiil.js";import"./ButtonIcon-olOKGEVR.js";import"./ButtonLabel-DqK0tKkl.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
