import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./AccountNotificationSettings-D9mTq542.js";import{t as i}from"./Button-L6T5IVdq.js";import{t as a}from"./ButtonGroup-qEf-oFo1.js";import{t as o}from"./List-BNjZuxCc.js";import{t as s}from"./SettingsItem-BasSsBVp.js";import{t as c}from"./ModalBase-BCoKaUL8.js";import{n as l,t as u}from"./ModalBody-CcVlYYQR.js";var d=e(t(),1),f=n(),p={title:`Account/AccountNotificationSettings`,component:r,tags:[`autodocs`],parameters:{}},m={args:{}},h=e=>{let[t,n]=(0,d.useState)({...e}),i=e=>{let{type:t,checked:r,name:i,value:a}=e.target;n(t===`checkbox`?e=>({...e,[i]:r}):e=>({...e,[i]:a}))};return(0,f.jsx)(r,{...e,...t,onChange:i})},g=()=>(0,f.jsx)(h,{smsAlerts:!0,phone:`99005566`}),_=()=>(0,f.jsx)(h,{smsAlerts:!0,phone:`99005566`,emailAlerts:!0,email:`mathias@brann.no`}),v=({title:e=`Aktør`})=>{let[t,n]=(0,d.useState)(!1),r=()=>{n(e=>!e)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{onClick:r,children:`Åpne modal`}),(0,f.jsxs)(c,{open:t,onClose:r,children:[(0,f.jsx)(l,{title:e,children:(0,f.jsx)(o,{children:(0,f.jsx)(s,{id:`bb`,interactive:!1,icon:{name:`Bergen Bar`,type:`company`},title:`Bergen Bar`,description:`Org. nr. XXX XXX XXX`})})}),(0,f.jsxs)(u,{children:[(0,f.jsx)(_,{}),(0,f.jsxs)(a,{children:[(0,f.jsx)(i,{onClick:r,children:`Lagre og avslutt`}),(0,f.jsx)(i,{onClick:r,variant:`outline`,children:`Avbryt`})]})]})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`({
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
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`Controlled`,`SmsAlerts`,`SmsAndEmailAlerts`,`AccountNotificationsModal`];export{v as AccountNotificationsModal,h as Controlled,m as Default,g as SmsAlerts,_ as SmsAndEmailAlerts,y as __namedExportsOrder,p as default};