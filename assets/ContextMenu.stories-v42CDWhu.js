import{a7 as t}from"./iframe-Ca4u80-y.js";import{S as b}from"./ArrowRedo-DJvmVjMy.js";import{S as v}from"./EyeClosed-Dm4wT9Ip.js";import{S as I}from"./Archive-JQjADMnA.js";import{S as k}from"./Trash-CQegPx8Y.js";import{S as w}from"./ClockDashed-C2nFpDvH.js";import{C as n}from"./ContextMenu-Cne7NUId.js";import{i as l}from"./inboxSearchResults-BbQn_t2z.js";import{S as u}from"./TeddyBear-DqM5BczA.js";import{L as x}from"./List-DNrtm8Gg.js";import{D as d}from"./DialogListItem-MaC6NDw4.js";import{L as g}from"./ListItem-CSPc22TA.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BCGdba1O.js";import"./Dropdown-CqSqE0dA.js";import"./SearchField-VyNSBwjR.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./FieldBase-BaoqxAAt.js";import"./Typography-DWDEZq_R.js";import"./useHighlightedText-DqjIK10c.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./Input-BzcsSDVe.js";import"./useMenu-D83_Vp30.js";import"./MenuListItem-MwOjEGoN.js";import"./MenuListDivider-R2CXinbT.js";import"./MenuListHeading-B4K-woqM.js";import"./MenuItem-BYM3QzRG.js";import"./ItemMedia-33czU3Hl.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./Checkmark-DdyDkuo2.js";import"./ItemLabel-DrPryDvn.js";import"./Heading-DWBFau_k.js";import"./ItemControls-EuOl9yJJ.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./ChevronRight-eVASrmJg.js";import"./InformationSquare-C5WU0eyN.js";import"./MenuElipsisHorizontal-ZgAigsFC.js";import"./dialogs-CifvfmmA.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DtMHVMqV.js";import"./AttachmentList-yf6pRco8.js";import"./AttachmentLink-BpjRJxc3.js";import"./File-KhZftDbX.js";import"./Section-DPESya5-.js";import"./Flex-DwGvCXeV.js";import"./TransmissionList-JnYMDijS.js";import"./Transmission-CKDmZlKa.js";import"./SeenByLog-B99Wjjjl.js";import"./SeenByLogItem-BxoHIfOx.js";import"./Byline-CZsol804.js";import"./SeenByLogButton-Dg0lFSTs.js";import"./Divider-BPwrxXbC.js";import"./DialogActions-BxU6dOSg.js";import"./ButtonGroupDivider-lZfdxe4t.js";import"./ChevronUp-gNqlWqNl.js";import"./ChevronDown-ewsJqjFk.js";import"./DropdownBase-EWPODi2B.js";import"./useClickOutside-BVUEOFfm.js";import"./ButtonGroup-DxWQp11R.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CQLw8VD6.js";import"./ItemLink-C3-H5hes.js";import"./DialogByline-CEk-2iIQ.js";import"./DialogMetadata-DPj2SPqm.js";import"./DialogStatus-9u8XuXZo.js";import"./Paperclip-Ck1kHMdS.js";import"./Files-CPyHwBdv.js";import"./MetaBase-DHdWkrLE.js";import"./MetaItem-BL124TMo.js";import"./ProgressIcon-Dl9dvKqn.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
