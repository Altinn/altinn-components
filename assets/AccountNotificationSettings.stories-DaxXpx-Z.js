import{r as g,j as t}from"./iframe-BqnZkKPi.js";import{A as S}from"./AccountNotificationSettings-_DtGeAgw.js";import{B as u}from"./Button-BhHmd_Fm.js";import{M as f}from"./ModalBase-CxE9fIF-.js";import{M as x,a as X}from"./ModalBody-B72hH_Lv.js";import{L as C}from"./List-BhyjlMCS.js";import{S as j}from"./SettingsItem-CL-7jNv1.js";import{B as v}from"./ButtonGroup-DF4p7rG3.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Cg5MupaB.js";import"./lite-DaUVFjkg.js";import"./index-wnzGLxld.js";import"./use-merge-refs-Dh9pzmOc.js";import"./Switch-BBnTu_Uu.js";import"./index-DAuAfjpD.js";import"./Label-CWCdrO7p.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./TextField-D-rWllbm.js";import"./FieldBase-BELBUfOz.js";import"./Typography-DM76If-Q.js";import"./useHighlightedText-Clj8nPui.js";import"./Skeleton-1qnYSSLw.js";import"./button-CeqU6--G.js";import"./Section-CvCvg2MJ.js";import"./Flex-Dfcm_wdC.js";import"./XMark-Y2_85_oc.js";import"./useId-9kVvsXig.js";import"./Icon-CnWjusVH.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Heading-BxNd6ZSD.js";import"./ListItem-C4Du7a0f.js";import"./Badge-wAZ__xuM.js";import"./ChevronUp-Df6M1VDr.js";import"./ChevronDown-CoVqqo9t.js";import"./ChevronRight-DE1wtPln.js";import"./SettingsItemBase--Dvcwneu.js";import"./ItemLink-mzPSXjXe.js";import"./ItemMedia-BIsU1ixF.js";import"./ItemControls-CZQ275uO.js";import"./SettingsModal-Ds32jFFb.js";import"./ButtonIcon-dIUFz82l.js";import"./ButtonLabel-DoJ9xNj_.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
