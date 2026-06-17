import{a7 as t}from"./iframe-CGVyzYP6.js";import{S as b}from"./ArrowRedo-Co5MAJ2G.js";import{S as v}from"./EyeClosed-CZZQ_70d.js";import{S as I}from"./Archive-JLvqwLbz.js";import{S as k}from"./Trash-DC850SXw.js";import{S as w}from"./ClockDashed-BN_ARXb6.js";import{C as i}from"./ContextMenu-6V2WGQT0.js";import{i as l}from"./inboxSearchResults-f4cGbibG.js";import{S as u}from"./TeddyBear-CY-Z2tzm.js";import{L as x}from"./List-BAuWcqgT.js";import{D as d}from"./DialogListItem-UgDZEJmI.js";import{L as g}from"./ListItem-ZS3MR4kD.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-_RUVZb-i.js";import"./Dropdown-85NQ92f7.js";import"./SearchField-Dki50BLg.js";import"./MagnifyingGlass-Vm5pwk0c.js";import"./FieldBase-CPq342qa.js";import"./Typography-CpGYIokR.js";import"./useHighlightedText-Bh9EAdhA.js";import"./Field-D0ZvmoXg.js";import"./Label-Cy3PFObt.js";import"./Input-ChwQfPxo.js";import"./useMenu-DakKUenW.js";import"./MenuListItem-BZZ7Na45.js";import"./MenuListDivider-rcUBnQ13.js";import"./MenuListHeading-Dp87R0C9.js";import"./MenuItem-D-GQTJGG.js";import"./ItemMedia-DPok0_Uu.js";import"./Avatar-DDHY9yxs.js";import"./AvatarGroup-B_UwXOMR.js";import"./Checkmark-pskdQzRC.js";import"./ItemLabel-C1oepsPk.js";import"./Heading-EfRG8byd.js";import"./ItemControls-DA3hAeY8.js";import"./Badge-DjC88ORp.js";import"./Tooltip-BCyYy-oX.js";import"./ChevronRight-_qaR5Ukf.js";import"./InformationSquare-CCTfPPnt.js";import"./MenuElipsisHorizontal-V5cJLUxq.js";import"./dialogs-BKQlzszr.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DTgb0o5l.js";import"./AttachmentList-BtEXrizv.js";import"./AttachmentLink-CSKylHfv.js";import"./File-DZHj7xxX.js";import"./Section-Dto-LHOR.js";import"./Flex-Ba3off4t.js";import"./TransmissionList-BAS4xLU1.js";import"./Transmission-CdISJjIR.js";import"./SeenByLog-BeVhqUy4.js";import"./SeenByLogButton-BXpR25cG.js";import"./SeenByLogItem-DPIDRDzZ.js";import"./Byline-Bm2t7DwV.js";import"./Divider-vDXY4oCB.js";import"./DialogActions-gkMbub-O.js";import"./ButtonGroupDivider-BmBJUz1Y.js";import"./ChevronUp-C5-b6A0s.js";import"./ChevronDown-BnuaQ1Jn.js";import"./DropdownBase-wNu-GM1z.js";import"./useClickOutside-CxQ1D8zp.js";import"./ButtonGroup-C56yvq46.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Czu03lhj.js";import"./ItemLink-BK6jfXpZ.js";import"./DialogByline-Dk3lSTGo.js";import"./DialogMetadata-CqX-Eith.js";import"./DialogStatus-8DXlrznu.js";import"./MetaItem-Dsew2WhL.js";import"./ProgressIcon-CFhDDTXc.js";import"./Paperclip-e2rEPEnE.js";import"./Files-DY2kjg33.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
