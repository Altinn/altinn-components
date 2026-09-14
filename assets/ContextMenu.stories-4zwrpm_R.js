import{a7 as t}from"./iframe-BmEoWqRz.js";import{S as b}from"./ArrowRedo-C1NFSIc6.js";import{S as v}from"./EyeClosed-BSif-JiM.js";import{S as I}from"./Archive-CQ0cOM4V.js";import{S as k}from"./Trash-CiLYMzmu.js";import{S as w}from"./ClockDashed-Diy8XoUh.js";import{C as n}from"./ContextMenu-CA9PQsOj.js";import{i as l}from"./inboxSearchResults-Ceev5SSe.js";import{S as u}from"./TeddyBear-6itqcQOj.js";import{L as x}from"./List-B_joIc0t.js";import{D as d}from"./DialogListItem-ocvnG3a2.js";import{L as g}from"./ListItem-Dqx_OQ9-.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-D-8bCjIT.js";import"./Dropdown-DCNQ961w.js";import"./SearchField-C1uLMLLi.js";import"./MagnifyingGlass-QgwWPsJq.js";import"./FieldBase-T_Ol0Ej6.js";import"./Typography-BVfh1yLf.js";import"./useHighlightedText-_GRR2uH-.js";import"./Field-DXYDb7rc.js";import"./Label-BXdvGr24.js";import"./Input-DDCcqldd.js";import"./useMenu-C68PXoRq.js";import"./MenuListItem-B5VngT1X.js";import"./MenuListDivider-FJd_PUPB.js";import"./MenuListHeading-md5j_QVK.js";import"./MenuItem-BdKylwZo.js";import"./ItemMedia-Db3gcn7a.js";import"./Avatar-B-ArKV_z.js";import"./AvatarGroup-D8IOgHe3.js";import"./Checkmark-D1L9L_AM.js";import"./ItemLabel-Aob4vZQG.js";import"./Heading-CSNATJ_q.js";import"./ItemControls-Y4OIpieN.js";import"./Badge-LAUy9dv8.js";import"./Tooltip-Bf6BoxU7.js";import"./ChevronRight-CG1CTQrY.js";import"./InformationSquare-CFFqTuvm.js";import"./MenuElipsisHorizontal-CCU4AlZR.js";import"./dialogs-C8Kyrk_Z.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BbpmgSyD.js";import"./AttachmentList-AX2tegjt.js";import"./AttachmentLink-CTxY4bQB.js";import"./File-BKN_-yRy.js";import"./Section-BwWH83Jj.js";import"./Flex-CErGdajF.js";import"./TransmissionList-BnMUKms4.js";import"./Transmission-wpiyWQFw.js";import"./SeenByLog-5Xx5T7Qm.js";import"./SeenByLogItem-CWx1UnUI.js";import"./Byline-CmyK_i-T.js";import"./SeenByLogButton-DnoPuC_l.js";import"./Divider-3tC3wFvg.js";import"./DialogActions-CBWC39Mt.js";import"./ButtonGroupDivider-CPkcTHAx.js";import"./ChevronUp-BklxGwTc.js";import"./ChevronDown-5iss_T7m.js";import"./DropdownBase-CsFSuM0S.js";import"./useClickOutside-DONxKDvW.js";import"./ButtonGroup-Bag4W9on.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-C6W6-0wj.js";import"./ItemLink-Bn8J_UL7.js";import"./DialogByline-B-RFBpRx.js";import"./DialogMetadata-Df_pGyht.js";import"./DialogStatus-Cd5znTtb.js";import"./Paperclip-CU67i8as.js";import"./Files-DjzBTIXm.js";import"./MetaBase-BVw74s9c.js";import"./MetaItem-TlxiZ33f.js";import"./ProgressIcon-fx_NMV-w.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
