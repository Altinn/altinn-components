var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-Ck42qOx1.js";import{S as I}from"./ArrowRedo-rDOmSv7b.js";import{S as k}from"./EyeClosed-BIbYAJrT.js";import{S as w}from"./Archive-DTVQB6g6.js";import{S as B}from"./Trash-hM9OCzu1.js";import{S as D}from"./ClockDashed-1RQ8UU49.js";import{C as a}from"./ContextMenu-B0efyfFm.js";import{i as u}from"./inboxSearchResults-_kdki4Xw.js";import{S as d}from"./TeddyBear-CLOESBug.js";import{L as h}from"./List-Cq42YOlE.js";import{D as g}from"./DialogListItem-BzfO2kFt.js";import{L as y}from"./ListItem-DshHRfE3.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-BwkDFTz9.js";import"./Dropdown-Dfag5WSr.js";import"./SearchField-B8KiDBUc.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuListHeading-C_C2TzXD.js";import"./MenuItem-BT6sfN7d.js";import"./ItemMedia-Br8-csYo.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./ItemControls-3hwzA3sg.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./ChevronRight-DWZnEevf.js";import"./FieldBase-ly-5mtcw.js";import"./Typography-nObbjg0R.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Input-DGLuCKOz.js";import"./useMenu-BBAeNj9K.js";import"./MenuListDivider-CthpKcql.js";import"./InformationSquare-CGuPpOub.js";import"./MenuElipsisHorizontal-BhzA5KpZ.js";import"./dialogs-8PKMVwhX.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BCTupcKY.js";import"./AttachmentList-BBT8MduF.js";import"./AttachmentLink-DyMYhyn8.js";import"./File-nCWJpnOO.js";import"./Section-wNwpgjpU.js";import"./Flex-CzBhjOdV.js";import"./TransmissionList-CltZtaml.js";import"./Transmission-C8xxaWGv.js";import"./SeenByLog-CfNk5cML.js";import"./SeenByLogItem-D-0zi5HW.js";import"./Byline-DtMU233V.js";import"./SeenByLogButton-CmVA8_Co.js";import"./Divider-CNMs3h7U.js";import"./DialogActions-BxT4HtMo.js";import"./ButtonGroup-ChpwNZu9.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CjTMF0wf.js";import"./ItemLink-D_slDvwR.js";import"./DialogByline-Cw9RTYvB.js";import"./DialogMetadata-CHkjkx6C.js";import"./DialogStatus-2u0KulXW.js";import"./Paperclip-ChaYZWb4.js";import"./Files-B3cMo_EB.js";import"./MetaBase-B9vGA9t4.js";import"./MetaItem-DIvLI5x1.js";import"./ProgressIcon-Cz9VCWcn.js";import"./ChevronUp-CXZFvpJO.js";import"./ChevronDown-CVgB8S_A.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
