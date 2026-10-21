var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-BXiLaIo1.js";import{S as I}from"./ArrowRedo-CpDYgiNb.js";import{S as k}from"./EyeClosed-C2SMR4Hk.js";import{S as w}from"./Archive-fOl5cdAJ.js";import{S as B}from"./Trash-B6SMwBsT.js";import{S as D}from"./ClockDashed-BJCK-tSb.js";import{C as a}from"./ContextMenu-D2k96V01.js";import{i as u}from"./inboxSearchResults-DPnMSNT-.js";import{S as d}from"./TeddyBear-Cucft8y_.js";import{L as h}from"./List-BNBV8ThU.js";import{D as g}from"./DialogListItem-BJP-28up.js";import{L as y}from"./ListItem-CTd9WB7d.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-CL8Sjosp.js";import"./Dropdown-By03aGa-.js";import"./SearchField-CdRvOe5p.js";import"./MagnifyingGlass-c64YmjJ0.js";import"./FieldBase-jDY5NJAX.js";import"./Typography-DfF7AP8y.js";import"./useHighlightedText-K6CHyIcM.js";import"./Field-B6gapKpe.js";import"./Label-CW_mCZHf.js";import"./Input-BQGhDE8-.js";import"./useMenu-CtVMoXgj.js";import"./MenuListItem-DfRmTFq2.js";import"./MenuListDivider-BxB7qLGS.js";import"./MenuListHeading-HYCXR4_8.js";import"./MenuItem-B-mwma_U.js";import"./ItemMedia-VY1kKFwh.js";import"./Avatar-C8Pz6Y-5.js";import"./AvatarGroup-DEeDgfDf.js";import"./Checkmark-V6stw9rv.js";import"./ItemLabel-CTUta9rO.js";import"./Heading-BSdWQg6G.js";import"./ItemControls-DC8itQ-R.js";import"./Badge-Dv1wWeY2.js";import"./Tooltip-Cd6x2nLz.js";import"./ChevronRight-CsaEnGk6.js";import"./InformationSquare-BMwsKYTB.js";import"./MenuElipsisHorizontal-CQ64RhHl.js";import"./dialogs-D6B59VTO.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DD7XcPKI.js";import"./AttachmentList-Jh9ZEr9P.js";import"./AttachmentLink-dmzqJzM8.js";import"./File-DmNJJwz9.js";import"./Section-SFy5BcqJ.js";import"./Flex-BVJPbTQ_.js";import"./TransmissionList-BMRmPNFo.js";import"./Transmission-BC06aJLv.js";import"./SeenByLog-C989vs9d.js";import"./SeenByLogItem-CYyozt3O.js";import"./Byline-om9Qq1nr.js";import"./SeenByLogButton-DjnDmTtK.js";import"./Divider-DPQQ_dI7.js";import"./DialogActions-BZbVH4uT.js";import"./ButtonGroup-z8aQXTJr.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-vbQ8A6x6.js";import"./ItemLink-DethJfu5.js";import"./DialogByline-DOJf8ml5.js";import"./DialogMetadata-DniVvqbX.js";import"./DialogStatus-Bnwz5-a7.js";import"./Paperclip-VobcuJWR.js";import"./Files-BuLfUcr_.js";import"./MetaBase-C2Xlwfnu.js";import"./MetaItem-CN0WxHUq.js";import"./ProgressIcon-CX0G2yTW.js";import"./ChevronUp-yA5Flpqo.js";import"./ChevronDown-DR7pfG2a.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
