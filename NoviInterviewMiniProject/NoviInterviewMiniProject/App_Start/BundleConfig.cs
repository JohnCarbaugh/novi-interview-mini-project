using System.Web;
using System.Web.Optimization;

namespace NoviInterviewMiniProject
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new Bundle("~/bundles/angular")
            .Include(new[] {
            "~/Scripts/Dist/runtime.*",
            "~/Scripts/Dist/polyfills.*",
            "~/Scripts/Dist/scripts.*",
            "~/Scripts/Dist/vendor.*",
            "~/Scripts/Dist/main.*"
            }));

            bundles.Add(new StyleBundle("~/bundles/angular-css")
            .Include(new[] {
            "~/Scripts/Dist/styles.*"
            }));
        }
    }
}
