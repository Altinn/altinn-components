var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a5 as e}from"./iframe-CmcSEjvS.js";import{S as I}from"./ArrowRedo-CPh1txYq.js";import{S as k}from"./EyeClosed-csj1jCae.js";import{S as w}from"./Archive-B4hgbdr3.js";import{S as B}from"./Trash-BCBK84Mw.js";import{S as D}from"./ClockDashed-DPSB59sO.js";import{C as a}from"./ContextMenu-Bo2fqWGf.js";import{i as u}from"./inboxSearchResults-BwRwjtc6.js";import{S as d}from"./TeddyBear-6cvqr_zk.js";import{L as h}from"./List-DKoS5qie.js";import{D as g}from"./DialogListItem-BdCrmS_r.js";import{L as y}from"./ListItem-CGdPgfN9.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-CjF5utG_.js";import"./Dropdown-BXdn9jDY.js";import"./SearchField-DQeX1ZYV.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./MenuListItem-BL-id_u-.js";import"./MenuListHeading-BKPqFrC5.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemMedia-BefRyocx.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./ItemLabel-s_xPF5R8.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ItemControls-YGZP0Vjk.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ChevronRight-B5wtiA4y.js";import"./FieldBase-C-IkhlpM.js";import"./Typography-sASlV-kd.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";import"./useMenu-C4pen0si.js";import"./MenuListDivider-wZXMjqHS.js";import"./InformationSquare-6xY-3cyl.js";import"./MenuElipsisHorizontal-DcPMVctg.js";import"./dialogs-CXpjKjav.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BAJSVfYh.js";import"./AttachmentList-ChCiKaw4.js";import"./AttachmentLink-mBMk8SOX.js";import"./File-CvtVyjYo.js";import"./Section-Bo2v-MBz.js";import"./Flex-DEGiHBSh.js";import"./TransmissionList-CXdVKtz4.js";import"./Transmission-D9TF-MkT.js";import"./SeenByLog-DPyjWWkj.js";import"./SeenByLogItem-CnGUk8dJ.js";import"./Byline-BkEVnoxC.js";import"./SeenByLogButton-CwJlsqs_.js";import"./Divider-BXgmMAUp.js";import"./DialogActions-CI9zcPRR.js";import"./ButtonGroup-Cpml5GDI.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DGtB-EKc.js";import"./ItemLink-CfNuON4u.js";import"./DialogByline-BsgmYY9j.js";import"./DialogMetadata-BJUY_XrA.js";import"./DialogStatus-DCW_e25m.js";import"./Paperclip-kSmXwm27.js";import"./Files-DxhHOFxv.js";import"./Checkmark-CgRfi7IM.js";import"./MetaBase-CNkgoh0p.js";import"./MetaItem-CD3YM6BJ.js";import"./ProgressIcon-BD4yhwQW.js";import"./ChevronUp-DVy7WPfM.js";import"./ChevronDown-CI4G7sPT.js";const{expect:m,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},s={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await m(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await m(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},Nt=["Default","ListControls","DialogControls"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{s as Default,p as DialogControls,c as ListControls,Nt as __namedExportsOrder,Jt as default};
