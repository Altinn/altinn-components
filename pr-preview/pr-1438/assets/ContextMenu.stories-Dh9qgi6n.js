var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-CW69B4-4.js";import{S as I}from"./ArrowRedo-Jq1_fqHY.js";import{S as k}from"./EyeClosed-C7AG-Nsq.js";import{S as w}from"./Archive-DYq_SIX9.js";import{S as B}from"./Trash-D4e6x_o2.js";import{S as D}from"./ClockDashed-B9DP6HjC.js";import{C as a}from"./ContextMenu-DeqMuVtu.js";import{i as u}from"./inboxSearchResults-BJ3dq_rF.js";import{S as d}from"./TeddyBear-eVf5XMmA.js";import{L as h}from"./List-RfjPrYOy.js";import{D as g}from"./DialogListItem-B4nsB02d.js";import{L as y}from"./ListItem-CLQ2Xgr8.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-BBtpGQm9.js";import"./Dropdown-DTxBcaKX.js";import"./SearchField-LDFEPhQv.js";import"./MagnifyingGlass-JTPy69Hm.js";import"./MenuListItem-CMSm7sFe.js";import"./MenuListHeading-Cky4DZUO.js";import"./MenuItem-WxsEDNt-.js";import"./ItemMedia-zpQSTqxO.js";import"./Avatar-DlTYOJ9X.js";import"./AvatarGroup-C54_5QsB.js";import"./Checkmark-BGDDfT19.js";import"./ItemLabel-BOWUd3uk.js";import"./Heading-BlWFVsgQ.js";import"./useHighlightedText-Coh-oebD.js";import"./ItemControls-Dz-gOQFJ.js";import"./Badge-pUt1HWk8.js";import"./Tooltip-Bdo2x66E.js";import"./ChevronRight-CxFkThxw.js";import"./FieldBase-Cx7I1cae.js";import"./Typography-CD2WmtRN.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./Input-BNHnVUMY.js";import"./useMenu-bx75--uT.js";import"./MenuListDivider-C9vQ7MZ-.js";import"./InformationSquare-O6zrlrVZ.js";import"./MenuElipsisHorizontal-CWvkIr-a.js";import"./dialogs-CIQRzQxm.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Bv3wFbYB.js";import"./AttachmentList-BZXM6mjp.js";import"./AttachmentLink-Can7BI-h.js";import"./File--iyq1SAt.js";import"./Section-DQYipFAJ.js";import"./Flex-CcbgemcX.js";import"./TransmissionList-CdwM_0AS.js";import"./Transmission-CBiX_7Rs.js";import"./SeenByLog-CnxIfI3U.js";import"./SeenByLogItem-Cph50qBz.js";import"./Byline-xzuOcDfP.js";import"./SeenByLogButton-Dbg3fCQo.js";import"./Divider-DY5AwWgq.js";import"./DialogActions-D-kPCQJg.js";import"./ButtonGroup-Bd6oXbKy.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BB5MbWTj.js";import"./ItemLink-CAV-Z684.js";import"./DialogByline-B9ZuvsYA.js";import"./DialogMetadata-CZwKEgVI.js";import"./DialogStatus-ZbFYqeRU.js";import"./Paperclip-ASI5mDZg.js";import"./Files-C838U7fT.js";import"./MetaBase-CUGel1dl.js";import"./MetaItem-BsBLR3RF.js";import"./ProgressIcon-Cwso0vyN.js";import"./ChevronUp-BFUaosek.js";import"./ChevronDown-CiTeIiQR.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...p.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
