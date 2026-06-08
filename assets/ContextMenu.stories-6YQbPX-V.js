import{a7 as t}from"./iframe-BkdCVhNa.js";import{S as b}from"./ArrowRedo-C2TWEOY4.js";import{S as v}from"./EyeClosed-CPe0dX8F.js";import{S as I}from"./Archive-BiGru9B5.js";import{S as k}from"./Trash-DpXv8-T-.js";import{S as w}from"./ClockDashed-CL_amKpI.js";import{C as i}from"./ContextMenu-_PNq0coO.js";import{i as l}from"./inboxSearchResults-CtrjrTsP.js";import{S as u}from"./TeddyBear-CLbuEA_c.js";import{L as x}from"./List-aWXUgCgM.js";import{D as d}from"./DialogListItem-DQ4ee7oM.js";import{L as g}from"./ListItem-jGe2QiZx.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-fgAyTcqj.js";import"./Dropdown-CAWWJNvU.js";import"./SearchField-ClkEO99z.js";import"./MagnifyingGlass-Dy-txje3.js";import"./FieldBase-DIosJ8GZ.js";import"./Typography-BbYlnfM1.js";import"./useHighlightedText-THgW7xGA.js";import"./Field-nzKcMOXI.js";import"./Label-DHWqz8jc.js";import"./Input-Bk6KAWUZ.js";import"./useMenu-Dy3YaaUo.js";import"./MenuListItem-pRWVrCNm.js";import"./MenuListHeading-ITzk-OYW.js";import"./MenuItem-DLDMkBQ4.js";import"./ItemMedia-ZGWW7sv6.js";import"./Avatar-BIkq-2V8.js";import"./AvatarGroup-M5GjbKZV.js";import"./Checkmark-ChhRzFzd.js";import"./ItemLabel-DCGYjoAC.js";import"./Heading-CYb_rmks.js";import"./ItemControls-Bpk8CkC-.js";import"./Badge-Do4_FWGT.js";import"./Tooltip-wNk76VVd.js";import"./ChevronRight-BWpY3hyQ.js";import"./index-CvtktNDj.js";import"./InformationSquare-D9_tzfnx.js";import"./MenuElipsisHorizontal-Bwh4aScC.js";import"./dialogs-Crnp8SeT.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Db4Cz7dR.js";import"./AttachmentList-CueKWQH9.js";import"./AttachmentLink-ZmCKgMSt.js";import"./File-BnuFLAIN.js";import"./Section-CCbnuMor.js";import"./Flex-0kNayUnl.js";import"./TransmissionList-D35MJz9w.js";import"./Transmission-IpmVATxe.js";import"./SeenByLog-C85n_9V_.js";import"./SeenByLogButton-dESqFVsw.js";import"./SeenByLogItem-PdmUXZ0D.js";import"./Byline-Dn_Wn8kH.js";import"./Divider-9OAe3IWi.js";import"./DialogActions-OiGGOazx.js";import"./ButtonGroupDivider-DDdfhEZd.js";import"./ChevronUp-5uVavT__.js";import"./ChevronDown-DHl1_IXJ.js";import"./DropdownBase-BCjOaYZJ.js";import"./useClickOutside-DNBn920N.js";import"./ButtonGroup-BeLY82P-.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CvuWU474.js";import"./ItemLink-DAE7sH1c.js";import"./DialogByline-DHoCAVsE.js";import"./DialogMetadata-CZnGE2Af.js";import"./DialogStatus-B_wtUZ7x.js";import"./MetaItem-BVcby5Yb.js";import"./ProgressIcon-J7rHQf2-.js";import"./Paperclip-NMLrrGRJ.js";import"./Files-DWzFs0MT.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
